
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0, 
      dislikes: 0,
      totalRatings: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    };
  }
  render() {
    return (
     <>
      <div className='content-rating'>
        <p>
        The authorized biography of the creator of Middle-earth. “One of the most interesting and readable biographies of a literary figure.” —The TimesIn the decades since his death in September 1973, millions have read The Hobbit, The Lord of the Rings, and The Silmarillion and become fascinated about the very private man behind the books. Born in South Africa in January 1892, John Ronald Reuel Tolkien was orphaned in childhood and brought up in near-poverty. He served in the first World War, surviving the Battle of the Somme, where he lost many of the closest friends he’d ever had. After the war he returned to the academic life, achieving high repute as a scholar and university teacher, eventually becoming Merton Professor of English at Oxford where he was a close friend of C. S. Lewis and the other writers known as “The Inklings.”Then suddenly his life changed dramatically. One day while grading essay papers he found himself writing “In a hole in the ground there lived a hobbit”—and worldwide renown awaited him.Humphrey Carpenter was given unrestricted access to all Tolkien’s papers, and interviewed his friends and family. From these sources he follows the long and painful process of creation that produced The Lord of the Rings and The Silmarillion and offers a wealth of information about the life and work of the twentieth century’s most cherished author.“J. R. R. Tolkien left his impress upon a whole generation as few recent writers have done . . . an excellent biography.” —Newsweek“A panorama of vignettes done with poise and exhaustive command. A man emerges whole.” —The Washington Post Book World
        </p>
        <div className='rating-buttons'>
          <button className='like-button' onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className='dislike-button' onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </div>
     </>
    );
  }
}

export default ContentRating;
