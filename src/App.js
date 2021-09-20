import './App.css';
import $ from 'jquery';
import React from 'react'; 

class Starwars extends React.Component{
  constructor(){
    super()
    this.state={
      name:'',
      gender:'',
      species:'',
    }
  }
  info(){
    this.setState({
      name:'Loading...',
      gender:'Loading...',
      species:'Loading...',
    })
    $("#img").html('<i>Loading....</i>')
    setTimeout(() => {
      const random=Math.floor(Math.random()*88)
      console.log(random);
      fetch(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${random}.json`)
      .then(response=>response.json())
      .then(data=>{
        this.setState({
          name:data.name,
          gender:data.gender,
          species:data.species,
        })
        $("#img").html(`<img src='${data.image}' width='40%' />`)
      })
    }, 1000);
  }
  render(){
    return(
      <div>
        <h1 className='display-4 border-bottom d-inline-block pb-1 border-warning mt-2'>
          StarWars Details
        </h1>
        <p>
          <button type='button' className='btn btn-outline-primary btn-lg mt-5 mb-4' onClick={()=>this.info()}>
            Get Information &#10071; &#10071;
          </button>
        </p>
        <div className='container shadow-lg py-5 mb-5 bg-dark text-light' id='info-area'>
          <div className='row mx-4 border border-danger'>
            <div className='col-lg-4 border border-danger'>
              <h2 className='border-bottom border-primary lead fs-2 pb-3 pt-2'>
                Name
              </h2>
              <p className='fs-1 lead text-warning'>
                {this.state.name}
              </p>
            </div>
            <div className='col-lg-4 border border-danger'>
              <h2 className='border-bottom border-primary lead fs-2 pb-3 pt-2'>
                Gender
              </h2>
              <p className='fs-1 lead text-warning'>
                {this.state.gender}
              </p>
            </div>
            <div className='col-lg-4 border border-danger'>
              <h2 className='border-bottom border-primary lead fs-2 pb-3 pt-2'>
                Species
              </h2>
              <p className='fs-1 lead text-warning'>
                {this.state.species}
              </p>
            </div>
          </div>
          <div className='mt-5'>
            <p id='img'>

            </p>
          </div>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="text-center px-5">
      <Starwars />
    </div>
  );
}

export default App;
