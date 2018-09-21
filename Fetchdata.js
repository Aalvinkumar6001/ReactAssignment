import React from 'react';
class Fetchdata extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        movies: []
      };
    }
  
    componentDidMount() {
      fetch("http://facebook.github.io/react-native/movies.json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              movies: result.movies
            });
          },
          
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
       

      const { error, isLoaded, movies } = this.state;
      if (error) {
          
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {movies.map(item => (
              <li key={item.id}>
               {item.id} {item.title} {item.releaseYear}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
export default Fetchdata;