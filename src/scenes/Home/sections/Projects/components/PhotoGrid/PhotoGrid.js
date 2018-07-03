import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import 'react-responsive-carousel/lib/styles/main.css';
import './PhotoGrid.css';
import PhotoGridFilter from '../PhotoGridFilter/PhotoGridFilter';

const Shuffle = window.Shuffle;
const projects = [
  {
    id: 0,
    image: 'quillon',
    skills: 'ReactJS + BlockExplore API',
    groups: ['javascript', 'nodejs'],
    title: 'Quillon',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'Quillon.co',
    subtitle: 'Quillon Marketing Portal',
    url: 'http://quillon.co',
    description:
      "Quillon Currency Marketing portal. This web portal is connected to the back-end BlockExplorer api. Used ReactJS, Redux, React-Redux, Redux-Sagga packages. I've also developed BlockExplorer"
  },
  {
    id: 1,
    image: 'kindertale',
    skills: 'PHP + Javascript',
    groups: ['php'],
    title: 'Kindertales',
    isVisit: true,
    imageCounts: 5,
    titleDetail: 'Kindertales.com',
    subtitle: 'Complete Childcare Management',
    url: 'http://kindertales.com/',
    description:
      'Easy to use childecare management system. Powerful tools for care providers and Parents stay connected to their child from anywhere. Easy online billing, Communication, Very powerful dynamic form builder and CRM are provided. Both android and ios app are ready. Used PHP using own built-in framework'
  },
  {
    id: 2,
    image: 'howtube',
    skills: 'PHP + Javascript',
    groups: ['php'],
    title: 'Howtube',
    isVisit: true,
    imageCounts: 5,
    titleDetail: 'Howtube.com',
    subtitle: 'Video platform that contains wide range of topics',
    url: 'https://www.howtube.com/',
    description:
      'howtube is a video hosting platform that exists to help video creators of all shapes and sizes connect with audiences in the most authentic manner possible and appropriately monetize their content at the same time.'
  },
  {
    id: 3,
    image: 'oohyah',
    skills: 'AngularJS + PHP',
    groups: ['php', 'javascript'],
    title: 'Oohyah',
    isVisit: true,
    imageCounts: 7,
    titleDetail: 'Oohyah.com',
    subtitle: 'Music Revalued A Fan Supported Streaming Platform',
    url: 'https://oohyah.com/',
    description:
      'Oohyah is Music Revalued A Fan Supported Streaming Platform. Provide powerful filter search and easy subscription system with millions of popular songs. Used AngularJS for front-end and Laravel5 for back-end.'
  },
  {
    id: 4,
    image: 'omnibazaar',
    skills: 'NodeJS + ReactJS',
    groups: ['javascript', 'nodejs'],
    title: 'Omnibazaar',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'Omnibazaar.com',
    subtitle: 'Decentralized e-commerce market platform',
    url: 'http://omnibazaar.com/',
    description:
      'Omnibazaar is decentralized e-commerce marketing platform. You can list products and services in the marketplace and accomplish transaction with crypto coins. Used ElectronJS + ReactJS to build cross platform desktop applications'
  },
  {
    id: 5,
    image: 'shoponya',
    skills: 'PHP ',
    groups: ['php'],
    title: 'Shoponya',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'Shoponya.com',
    subtitle: '',
    url: 'https://www.shoponya.com/',
    description:
      'E-commerce market place to let you spend less time marketing and more time filling orders. Visual tag based search. Integrated stripe payment gateway.'
  },
  {
    id: 6,
    image: 'featurefinance',
    skills: 'Vue.js + Laravel',
    groups: ['javascript', 'php'],
    title: 'FeatureFinance',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'FeatureFinance.com',
    url: 'https://featurefinance.com',
    description:
      'Feature Finance democratizes film by offering a role and a voice to mainstream consumers whose previous participation in the movie business was simply buying tickets. '
  },
  {
    id: 7,
    image: 'limologs',
    skills: 'Ruby on Rails',
    groups: ['ruby'],
    title: 'Limologs',
    isVisit: true,
    imageCounts: 6,
    titleDetail: 'Limo Logs',
    url: 'https://www.limologs.com/',
    description:
      'Limo Logs has the ability to track all of your vehicles not just those that are DOT regulated, so when your drivers go from sedan to bus they can simply select their new vehicle. Used Ruby on Rails'
  },
  {
    id: 8,
    image: 'airdropalert',
    skills: 'ReactJS + VueJS + NodeJS',
    groups: ['javascript', 'nodejs'],
    title: 'Airdropalert',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'AirdropAlert',
    url: 'https://airdropalert.com/',
    description:
      'AirdropAlert.com launched June 2017 to create awareness to the crypto community about the existence of airdrops.'
  }
];

function Figure({ id, groups, imageName, title, skills, handleLearnMore }) {
  const imgSrc = '/images/projects/' + imageName + '.png';
  const groupsJSON = JSON.stringify(groups);

  return (
    <div
      key={id}
      className="col-md-6 col-sm-6 col-lg-4 picture-item"
      data-groups={groupsJSON}
      data-title={title}
    >
      <div className="aspect aspect--16x9">
        <div className="aspect__inner">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="picture-item-overlay" />
        <div className="picture-item-hover">
          <div className="picture-title">{title}</div>
          <div className="picture-skills">{skills}</div>
          <a
            className="learn-more"
            onClick={() => {
              handleLearnMore(id);
            }}
          >
            Learn More
          </a>
        </div>
      </div>
      <figcaption>{title}</figcaption>
    </div>
  );
}

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDataID: 0,
      modal: false
    };
    this.onClickLearnMore = this.onClickLearnMore.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.shuffle = new Shuffle(this.element, {
      itemSelector: '.picture-item',
      sizer: this.sizer
    });
    window.projectShuffleContainer = this.shuffle;
  }
  onClickLearnMore(id) {
    this.setState({
      modalDataID: id
    });
    this.toggle();
  }
  render() {
    const detailModalImageCounts = projects[this.state.modalDataID].imageCounts;
    const imagePrefix = projects[this.state.modalDataID].image;
    let detailImages = [];

    const { titleDetail, subtitle, description, url } = projects[
      this.state.modalDataID
    ];
    for (let index = 0; index < detailModalImageCounts; index++) {
      detailImages.push(
        <div>
          <img src={'images/projects/' + imagePrefix + '_' + index + '.png'} />
        </div>
      );
    }
    return (
      <React.Fragment>
        <PhotoGridFilter />
        <div
          className="row my-shuffle-container shuffle"
          ref={ref => (this.element = ref)}
        >
          {projects.map(project => (
            <Figure
              key={project.id}
              id={project.id}
              groups={project.groups}
              imageName={project.image}
              title={project.title}
              skills={project.skills}
              handleLearnMore={this.onClickLearnMore}
            />
          ))}
          <div
            ref={element => (this.sizer = element)}
            className="col-xs-1 col-sm-1 photo-grid__sizer"
          />
        </div>
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="project-detail-modal"
        >
          <ModalBody>
            <Carousel>{detailImages}</Carousel>
            <div className="title">{titleDetail}</div>
            <div className="sub-title">{subtitle}</div>
            <div className="divider" />
            <div className="description">{description}</div>
          </ModalBody>
          <ModalFooter>
            <a
              href={url}
              className="visit-button"
              target="_blank"
              color="primary"
              onClick={this.toggle}
            >
              VISIT SITE
            </a>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PhotoGrid;
