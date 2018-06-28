import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './PhotoGrid.css';
import PhotoGridFilter from "../PhotoGridFilter/PhotoGridFilter";

const Shuffle = window.Shuffle;
const projects = [
  {id: 1, image: 'quillon', subimageCount:0, skills:'React.js', groups: ['javascript'], title: 'Quillon', isVisit: true},
  {id: 2, image: 'kindertale', subimageCount:0, skills:'React.js', groups: ['javascript'], title: 'Kindertale', isVisit: true},
  {id: 3, image: 'howtube', subimageCount:0, skills:'React.js', groups: ['php'], title: 'Howtube', isVisit: true},
  {id: 4, image: 'oohyah', subimageCount:0, skills:'React.js', groups: ['php'], title: 'Oohyah', isVisit: true},
  {id: 5, image: 'omnibazaar', subimageCount:0, skills:'React.js', groups: ['javascript'], title: 'Omnibazaar', isVisit: true},
  {id: 6, image: 'shoponya', subimageCount:0, skills:'React.js', groups: ['javascript'], title: 'Shoponya', isVisit: true},
  {id: 7, image: 'featurefinance', subimageCount:0, skills:'React.js', groups: ['javascript'], title: 'Featurefinance', isVisit: true},
  {id: 8, image: 'limologs', subimageCount:0, skills:'React.js', groups: ['javascript'], title: 'Limologs', isVisit: true},
  {id: 9, image: 'airdropalert', subimageCount:0, skills:'React.js', groups: ['javascript'], title: 'Airdropalert', isVisit: true}
];

function Figure({id, groups, imageName, title, skills, handleLearnMore}) {
  const imgSrc = '/images/projects/'+imageName+'.png';
  const groupsJSON = JSON.stringify(groups);

  return (
    <div key={id} className="col-md-6 col-sm-6 col-lg-4 picture-item" data-groups={groupsJSON} data-title={title}>
      <div className="aspect aspect--16x9">
        <div className="aspect__inner">
          <img src={imgSrc} alt={title}/>
        </div>
        <div className="picture-item-overlay"/>
        <div className="picture-item-hover">
          <div className="picture-title">
            {title}
          </div>
          <div className="picture-skills">
            {skills}
          </div>
          <a className="learn-more" onClick={()=>{handleLearnMore(id)}}>
            LEARN MORE
          </a>
        </div>
      </div>
      <figcaption>{title}</figcaption>
    </div>
  )
}

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDataID: 1,
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
      itemSelector:'.picture-item',
      sizer:this.sizer
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
    return (
      <React.Fragment>
        <PhotoGridFilter/>
        <div className="row my-shuffle-container shuffle" ref={(ref) => this.element = ref}>
          {
            projects.map((project) => (
              <Figure
                key={project.id}
                id={project.id}
                groups={project.groups}
                imageName={project.image}
                title={project.title}
                skills={project.skills}
                handleLearnMore={this.onClickLearnMore}/>
            ))
          }
          <div ref={element => this.sizer = element} className="col-xs-1 col-sm-1 photo-grid__sizer"/>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PhotoGrid;