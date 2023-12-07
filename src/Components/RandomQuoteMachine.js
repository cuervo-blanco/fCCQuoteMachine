import React from 'react';

const colorArray = ['#495662','#56597f','#635b9d', '#726399', '#836b8c','#94737c','#a5796b','#b1815d','#a99066','#9f9f70' ];

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      color: ''
    };

    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data.content,
          author: data.author,
          color: colorArray[Math.floor(Math.random()* 9)]
        });
      });
    };

    componentDidMount() {
        this.handleClick();
        }

        shareOnTwitter() {
            window.open("https://twitter.com/intent/tweet?text=" + this.state.quote + " - " + this.state.author, "_blank");
            }
        
        shareOnTumblr() {
            window.open("https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + this.state.author + "&content=" + this.state.quote + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button", "_blank");
        }

    render() {
        const styleText = { color: this.state.color };
        const styleBackground = { backgroundColor: this.state.color };

        return (
            <div id="quote-background" style={styleBackground}>
                <div id="quote-box">
                    <div id="text">
                        <h1 style={styleText}>{this.state.quote}</h1>
                    </div>
                    <div id="author">
                        <h2 style={styleText}>-{this.state.author}</h2>
                    </div>
                    <div id="buttons" >
                        <div id="sharing-buttons">
                            <a href={'https://twitter.com/intent/tweet?text='+ this.state.author + "&content=" + this.state.quote + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"} style={styleBackground} onClick={this.shareOnTwitter} id="tweet-quote"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></a>
                            <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + this.state.author + "&content=" + this.state.quote + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"} style={styleBackground} onClick={this.shareOnTumblr} id="tweet-quote"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1 .8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5 .9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"/></svg></a>
                        </div>
                            <button id="new-quote" style={styleBackground}  onClick={this.handleClick}>New Quote</button>
                    </div>
                
                    
                </div>
            </div>
            );
        }
    }

export default RandomQuoteMachine;