import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from  'react-infinite-scroll-component'



export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [], // will contain the top headlines .
            page: 1,
            loading: false,
            totalResults : 0
        }
        document.title = `${this.props.category} - iNews`;
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
    }
    // fetching data from api endpoint using async await method .
    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
       
        this.setState({
           page: this.state.page + 1,
        })

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
       
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            page: this.state.page + 1,
            
        })
        
    };
    


    render() {
        return (
          <>
                <h2 className="text-center"> iNews - TopHeadlines</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container my-3">
                    <div className="row">
                        {
                            this.state.articles.map((article) => {
                                return (
                                    <div className="col-md-4">
                                        <NewsItem title={article.title}
                                            description={article.description}
                                            imageUrl={article.urlToImage}
                                            newsUrl={article.url}
                                            author={article.author}
                                            date={article.publishedAt}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>

                    </InfiniteScroll>
                   
                   </>

            
                )
    }
}

                export default News
