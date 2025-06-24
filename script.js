// Données personnalisables : images, titres, descriptions
const categories = [
  {
    name: 'Programmes primés',
    items: [
      { image: 'medias/LPA2.webp', title: 'La porte Académie', description: 'Une caméra en main, un œil en éveil. Là où d’autres passent sans voir, lui capte l’émotion, le détail, le moment. À La Porte Académie, il découvre que raconter, c’est aussi savoir écouter et que la technique n’est rien sans la vision. Guidé par les plus grands créateurs du web, un apprenti vidéaste entre en scène.', date:'2025', saisons:'' },
      { image: 'medias/FRW.webp', title: 'Formation Rédaction WEB', description: 'Elle pensait qu’écrire, c’était raconter. Elle découvre que c’est guider. Guider l’œil, retenir l’attention, créer du lien avec des mots invisibles. Dans un monde saturé d’écrans, elle apprend à écrire pour être lue — et à faire du silence numérique un espace de rencontre.', date: '2024', saisons:'' },
      { image: 'medias/UCBL.webp', title: 'DEUST Agapsc Animation', description: 'Ils sont là, en marge, en silence, en attente. Lui, il entre. Pas pour faire du bruit, mais pour créer du lien. Avec un mot, un geste, un projet, il change le cours des choses. Dans les couloirs d’un centre social, il apprend que l’animation, c’est parfois l’art de redonner du mouvement à des vies en pause.', date: '2019', saisons:'' },
      { image: 'medias/bacl.webp', title: 'BAC L', description: 'Les mots comme seuls compagnons, les livres comme refuges et armes. Très tôt, il apprend à penser plus loin, à sentir plus fort. Entre poésie et lucidité, il aiguise sa plume pour mieux comprendre le monde et peut-être le transformer, à sa manière.', date: '2016', saisons:'' },
      { image: 'medias/sst.webp', title: 'SST', description: 'Un jour, tout bascule. Plus de temps pour réfléchir, juste agir. Il est celui qui reste calme, celui qui se souvient, celui qui tient la main. Dans un monde où tout peut arriver, il devient le premier maillon d’une chaîne invisible… réservée au lieu de travail, mais capable de faire toute la différence.', date: '2023', saisons:'' },
      { image: 'medias/bafa.webp', title: 'BAFA', description: 'Ils ont entre 6 et 12 ans. Ils rient, ils pleurent, ils crient. Lui, il les regarde avec un calme étrange, presque complice. Il ne joue pas avec eux pour passer le temps, il entre dans leur univers pour en préserver la magie. L’espace de quelques étés, il devient ce héros dont les enfants se souviendront sans jamais se rappeler son nom.', date: '2014', saisons : '' }
    ]
  },
  {
    name: 'Action/Aventure',
    items: [
      { image: 'medias/lumix.webp', title: 'Captured Lights', description: 'Dans un monde où chaque instant s’évanouit, il tend la main vers l’éphémère. Avec sa caméra pour guide, il déniche les détails que personne ne remarque, tisse des histoires invisibles et donne vie à ce qui semblait intangible. Entre ombres et lumières, il transforme le réel en poésie visuelle, révélant la beauté cachée dans chaque pixel. Un voyage solitaire, à la frontière du visible, où la patience et le regard affûté sculptent le temps.', date: '2024', saisons:'2 saisons' },
      { image: 'medias/magasin.webp', title: 'Sous pression', description: 'Derrière les allées bien rangées d’un supermarché, c’est un autre monde qui s’active. Il est au centre de tout : les plannings, les chiffres, les imprévus. Il recrute, forme, soutient, anticipe. Chaque jour, il ajuste l’équilibre fragile entre humains, stocks et objectifs. Ce n’est pas seulement de la gestion : c’est de la survie en milieu organisé.', date: '2020', saisons:'4 saisons' },
      { image: 'medias/buffalo.webp', title: 'Kienai honoo', description: 'Sous les néons fatigués de la cuisine, entre la fumée et les ordres criés, il grille, il sert, il tient debout. Ce n’est pas glorieux, mais c’est honnête. La chaleur anesthésie les doutes, les odeurs de viande couvrent les rêves ajournés. Il a appris à vivre dans l’urgence, à écouter les silences entre deux tickets, à reconnaître ses limites dans le bruit du rush. Ce n’est pas le job de sa vie. Mais c’est ici qu’il a appris à encaisser, à durer. À tenir.', date: '2019' , saisons:'Une flamme inextinguible'},
      { image: 'medias/vdl.webp', title: 'Jour 1, Responsabilités 100%', description: 'À 18 ans, il entre par la petite porte dans l’un des mondes les plus complexes de la société : celui de l’éducation populaire. Dans un centre de loisirs niché au cœur de Lyon, il découvre que gérer une équipe, ce n’est pas seulement coordonner un planning — c’est apprendre à composer avec les imprévus, les émotions, les conflits. Caméra en main, ce documentaire suit l’évolution d’un jeune adulte plongé trop tôt dans un univers de responsabilités. Une chronique de l’engagement discret, du lien social tissé jour après jour, entre enfants, familles et institutions.', date: '2017', saisons:'2 saisons' },
      { image: 'medias/school.webp', title: 'À contre-jour', description: 'Il pensait que ce n’était qu’un job d’été. Mais derrière les jeux et les goûters, il découvre un monde en miniature : des enfants qui observent tout, des collègues qui doutent, des décisions à prendre quand personne ne regarde. À 16 ans, sans le savoir, il fait ses premiers pas dans le monde du travail. Un monde où chaque mot compte, où chaque regard peut apaiser ou blesser. Et dans ce vacarme organisé, il comprend que la vraie autorité ne crie jamais. C’est ici que tout commence.', date: '2016', saisons:'8 saisons' },
    ]
  },
  {
    name: 'Les indispensables',
    items: [
      { image: 'medias/detail.webp', title: 'ATTENTION AUX DETAILS', description: '', date: '', saisons:'⭐️⭐️⭐️⭐️☆' },
      { image: 'medias/ponctuel.webp', title: 'PONCTUEL', description: '', date: '' , saisons:'⭐️⭐️⭐️⭐️⭐️'},
      { image: 'medias/adaptabilite.webp', title: 'ADAPTABILITE', description: '', date: '', saisons:'⭐️⭐️⭐️⭐️⭐️' },
      { image: 'medias/autonomie.webp', title: 'AUTONOMIE', description: '', date: '', saisons:'⭐️⭐️⭐️⭐️⭐️' },
      { image: 'medias/comm.webp', title: 'COMMUNICATION', description: '', date: '', saisons:'⭐️⭐️⭐️⭐️☆' },
      { image: 'medias/creativite.webp', title: 'CREATIVITE', description: '', date: '', saisons:'⭐️⭐️⭐️⭐️⭐️' },
      { image: 'medias/calme.webp', title: 'GESTION DU STRESS', description: '', date: '' , saisons:'⭐️⭐️⭐️⭐️⭐️'},
    ]
  },
{
    name: 'Parce que vous avez recherché "Vidéo"',
    items: [
      { image: 'medias/davinci.webp', title: 'Davinci Resolve', description: '', date: '', saisons:'⭐️⭐️⭐️⭐️⭐️' },
      { image: 'medias/montage.webp', title: 'Montage vidéo', description: '', date: '' , saisons:'⭐️⭐️⭐️⭐️⭐️'},
      { image: 'medias/affinity.webp', title: 'Suite Affinity', description: '', date: '', saisons:'⭐️⭐️⭐️☆☆' },
      { image: 'medias/sound.webp', title: 'Sound Design', description: '', date: '', saisons:'⭐️⭐️⭐️⭐️⭐️' },
      { image: 'medias/story.webp', title: 'Storytelling', description: '', date: '', saisons:'⭐️⭐️⭐️⭐️☆' },
      { image: 'medias/filmmaking.webp', title: 'Captation vidéo', description: '', date: '', saisons:'⭐️⭐️⭐️⭐️☆' },
      { image: 'medias/photo.webp', title: 'Photographie', description: '', date: '' , saisons:'⭐️⭐️⭐️⭐️☆'},
      { image: 'medias/motion.webp', title: 'Motion Design', description: '', date: '', saisons:'⭐️⭐️⭐️☆☆' },
      { image: 'medias/anglais.webp', title: 'Anglais', description: '', date: '', saisons:'⭐️⭐️⭐️⭐️⭐️' },
    ]
  }
];

// Création des catégories + miniatures
const main = document.getElementById('main-content');

categories.forEach((category, index) => {
  const section = document.createElement('section');
  section.className = 'category';

  section.innerHTML = `
    <h2>${category.name}</h2>
    <div class="arrow-right" onclick="scrollRight(${index})">&#8250;</div>
    <div class="scroll-container" id="scroll-${index}"></div>
  `;

  main.appendChild(section);

  const scrollContainer = section.querySelector('.scroll-container');
const shuffledItems = category.items.sort(() => Math.random() - 0.5);


shuffledItems.forEach(({image, title, description, date, saisons}) => {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
      <img src="${image}" alt="${title}" />
      <div class="info">
        <div class="info-header">
          <h3>${title}</h3>
          <div class="date">${date}</div>
        </div>
    ${saisons ? `<div class="saisons">${saisons}</div>` : ''}
    <p>${description}</p>
      </div>
    `;
    scrollContainer.appendChild(item);
  });
});

// Gestion du scroll (bouclage)
function scrollRight(index) {
  const container = document.getElementById(`scroll-${index}`);
  const last = container.lastElementChild;
  container.insertBefore(last, container.firstElementChild);
}

// Animation du header et du hero
const header = document.getElementById('header');
const hero = document.getElementById('hero');
const heroVideo = document.getElementById('hero-video');
const poster = document.getElementById('poster');

setTimeout(() => {
  poster.classList.add('hidden');
  heroVideo.play();
}, 5000);

heroVideo.addEventListener('ended', () => {
  poster.classList.remove('hidden');
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if(scrollY > 40) {
    header.classList.add('scrolled');
    hero.classList.add('shrink');
  } else {
    header.classList.remove('scrolled');
    hero.classList.remove('shrink');
  }
});

document.getElementById('btn-like').addEventListener('click', () => {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelectorAll('.category').forEach(category => {
  category.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      category.classList.add('hovered');
    });
    item.addEventListener('mouseleave', () => {
      category.classList.remove('hovered');
    });
  });
});
