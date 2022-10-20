const speakers = [
  {
    name: 'Viviana Angulo', position: 'Co-Founder Pista8', description: 'Accelerator of international and business collaborative format.', photo: '/assets/speakers/vivianaSpeaker.jpeg',
  },

  {
    name: 'Sebastian Ibáñez', position: 'Consultor PYMES', description: 'With a background in Management Engineering and a Master in Innovation and Entrepreneurship Management.', photo: '/assets/speakers/sebastianSpeaker.jpeg',
  },

  {
    name: 'Pedro Rey Puma', position: 'Founder UTN blockchain Lab', description: 'Marketing Manager for the global exchange okx.com, professor in the cryptoeconomics course at the Universidad del Cuyo.', photo: '/assets/speakers/pedroSpeaker.jpeg',
  },

  {
    name: 'Yamila Peralta', position: 'CEO Women Entrepreneurs', description: 'PhD in Psychology (University of Barcelona, ​​Spain). Master in Work Psychology of Organizations and Human Resources (Univ. de Barcelona, ​​Spain).', photo: '/assets/speakers/yamilaSpeaker.jpeg',
  },

  {
    name: 'Marcelo Duran', position: 'Editor at Punto BO magazine', description: 'Degree in Communication, with a mention in advertising from the UCB, Master of Fine Arts in Computer Arts from the Tracor Institute. Quantum Motors', photo: '/assets/speakers/marceloSpeaker.png',
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