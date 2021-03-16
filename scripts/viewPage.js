const petsListTemplate = `
  <h2>Here are the existing pets:</h2>
  <div class="petsList">
    PETS_WILL_GO_HERE
  </div>
`;

const petListObjectTemplate = `
  <div class="pet" id="PET_ID_WILL_GO_HERE">
    <p>id: <span class="value">PET_ID_WILL_GO_HERE</span></p>
    <p>name: <span class="value">PET_NAME_WILL_GO_HERE</span></p>    
    <div class="tags">
      <p>tags: PET_TAGS_WILL_GO_HERE</p>
    </div>
    <div class="deleteIcon" onClick="handleDelete(PET_ID_WILL_GO_HERE)">
    <img src="delete-icon.svg"  alt="delete"/>
    </div>
  </div>
`;

const petListObjectTagTemplate = `
  <span class="tag">PET_TAG_WILL_GO_HERE</span>
`

const getPetsUrl = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available';

fetch(getPetsUrl, {headers: {'Content-Type': 'application/json'}})
  .then((response) => response.json())
  .then((pets) => {
    let petsHTML = '';

    pets.forEach((pet) => {
      let petTags = '';

      if(Array.isArray(pet.tags)){
        pet.tags.forEach((tag) => {
          if(
            typeof tag === 'object' &&
            tag !== null &&
            Object.prototype.hasOwnProperty.call(tag, 'name') &&
            typeof tag.name === 'string') {
              petTags += petListObjectTagTemplate.replace('PET_TAG_WILL_GO_HERE', tag.name)
          }
        });
      }

      let petHTML = petListObjectTemplate;
      // We use the regular expression in this case to cover multiple occurrences in text.
      petHTML = petHTML.replace(/PET_ID_WILL_GO_HERE/g, pet.id)
      petHTML = petHTML.replace('PET_NAME_WILL_GO_HERE', pet.name)
      petHTML = petHTML.replace('PET_TAGS_WILL_GO_HERE', petTags)

      petsHTML += petHTML;

    })

    let resultsHTML = petsListTemplate;
    resultsHTML = resultsHTML.replace('PETS_WILL_GO_HERE', petsHTML);

    document.getElementById('viewPage').innerHTML = resultsHTML;
  })
  .catch((error) => {
    console.error(error);
  });

const deletePetUrl = 'https://petstore.swagger.io/v2/pet/';

function handleDelete(id) {
  const pathForDeleteRequest = deletePetUrl + id;
  fetch(pathForDeleteRequest, {
    headers: {'Content-Type': 'application/json'},
    method: 'DELETE'
  })
    .then(response => {
      if(response.status === 404){
        alert('The pet could not be found!')
      } else {
        response.json()
          .then(() => {
            alert('Pet deleted!')
            document.getElementById(id).remove();
          });
      }
    })
    .catch((error) => {
      if(error.message){
        alert(error.message);
      }
    })
}