import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [] , // will contain the top headlines .
            page : 1,
            loading : false
        }

    }
    // fetching data from api endpoint using async await method .
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25db0bbec75045d29cc54fc69c55603c&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            { articles: parsedData.articles ,
            totalResults : parsedData.totalResults,
            loading:false
            }
            
            );
    }

    handleNext = async () =>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25db0bbec75045d29cc54fc69c55603c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ 
            articles: parsedData.articles ,
            page : this.state.page + 1 ,
            loading:false
        })
    }
    }

    handlePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25db0bbec75045d29cc54fc69c55603c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ 
            articles: parsedData.articles ,
            page : this.state.page - 1,
            loading:false
        });
    }

    



    render() {
        return (
            <div className="container my-3">
                <h2 className = "text-center"> iNews - TopHeadlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {
                       !this.state.loading && this.state.articles.map((article) => {
                            return (
                                <div className="col-md-4">
                                    <NewsItem title={article.title}
                                        description={article.description}
                                        imageUrl={article.urlToImage}
                                        newsUrl = {article.url}
                                        author = {article.author}
                                        date = {article.publishedAt}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className = "d-flex justify-content-between">
                <button disabled = {this.state.page<=1} type="button" className="btn btn-danger"  onClick = {this.handlePrevious} >Previous</button>
                <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-danger" onClick = {this.handleNext}>Next</button>
                </div>

            </div>
        )
    }
}

export default News
