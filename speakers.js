const speakers = [
  {
    name: 'Viviana Angulo', position: 'Co-Founder Pista8', description: 'Accelerator of international and business collaborative format.', photo: 'https://drive.google.com/uc?export=download&id=1B8lJulbXbs_Py6CZ28wHOc7ZEa9quvkd',
  },

  {
    name: 'Sebastian Ibáñez', position: 'Consultor PYMES', description: 'With a background in Management Engineering and a Master in Innovation and Entrepreneurship Management.', photo: 'https://drive.google.com/uc?export=download&id=1KDVHabPOpgHGwLPt-y7YKX6yirXtHLeZ',
  },

  {
    name: 'Pedro Rey Puma', position: 'Founder UTN blockchain Lab', description: 'Marketing Manager for the global exchange okx.com, professor in the cryptoeconomics course at the Universidad del Cuyo.', photo: 'https://drive.google.com/uc?export=download&id=184r7KWTFrK46gQHCaNb3NptX9vYyTQRI',
  },

  {
    name: 'Yamila Peralta', position: 'CEO Women Entrepreneurs', description: 'PhD in Psychology (University of Barcelona, ​​Spain). Master in Work Psychology of Organizations and Human Resources (Univ. de Barcelona, ​​Spain).', photo: 'https://drive.google.com/uc?export=download&id=1df1QQTtIop23rhHKtBRiD5f8_vRQq9VE',
  },

  {
    name: 'Marcelo Duran', position: 'Editor at Punto BO magazine', description: 'Degree in Communication, with a mention in advertising from the UCB, Master of Fine Arts in Computer Arts from the Tracor Institute. Quantum Motors', photo: 'https://drive.google.com/uc?export=download&id=1ZE16c7hV9wrXJd4ZK8Z0tdIBsiKe2meC',
  },

  {
    name: 'Sebastian Zurita', position: 'CEO Loop Corporation', description: 'Senior Web Developer specializing in front end development. Experienced with all the stages of the development cycle for dynamic web projects.', photo: 'https://drive.google.com/uc?export=download&id=1V388PjYyA8xkyEYBhABX3d6t4ZGSa6q5',
  },
];

const titleSpeakers = document.createElement('h2');
titleSpeakers.textContent = 'Featured Speakers';
titleSpeakers.className = 'title-speakers';
document.getElementById('speakers').appendChild(titleSpeakers);

const lineTitleSpeakers = document.createElement('hr');
document.getElementById('speakers').appendChild(lineTitleSpeakers);

const containerSpeakers = document.createElement('div');
containerSpeakers.className = 'container-speakers';
document.getElementById('speakers').appendChild(containerSpeakers);

for (let i = 0; i < speakers.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.className = 'speaker';
  containerSpeakers.appendChild(speaker);

  const speakerImageContainer = document.createElement('div');
  speakerImageContainer.className = 'speaker-image-container';
  speaker.appendChild(speakerImageContainer);

  const photo = document.createElement('img');
  photo.src = speakers[i].photo;
  photo.className = 'photo-speaker';
  speakerImageContainer.appendChild(photo);

  const speakerTextContainer = document.createElement('div');
  speakerTextContainer.className = 'speaker-text-container';
  speaker.appendChild(speakerTextContainer);

  const name = document.createElement('h3');
  name.textContent = speakers[i].name;
  name.className = 'name-speaker';
  speakerTextContainer.appendChild(name);

  const position = document.createElement('p');
  position.textContent = speakers[i].position;
  position.className = 'position-speaker';
  speakerTextContainer.appendChild(position);

  const description = document.createElement('p');
  description.textContent = speakers[i].description;
  description.className = 'description-speaker';
  speakerTextContainer.appendChild(description);
}