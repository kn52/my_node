import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { actions } from '../Redux/Action';

 class News extends Component {
//     static defaultProp={
//          country:'in',
//         pagesize:8,
//         category:'general'
//     }
//    static propTypes={
//        country:PropTypes.string,
//        pagesize:PropTypes.number,
//        category:PropTypes.string
//    }
    constructor(props){
        super(props);
      this.state={
          article:[],
          loading:false,
          page:1,
          totalRecord:0
      }
    }
     getHeadlinesByCategory=async(newsProps)=>{
         debugger
        const { cat, coun } = this.props;
        let url=`https://newsapi.org/v2/top-headlines?country=${coun}&&category=${cat}&apiKey=98d5f197f8a049caab878288cc9bf62f&page=${this.state.page-1}&pageSize=20`;
        // let url=`https://newsapi.org/v2/top-headlines?country=${newsProps.country}&category=${newsProps.newsCategory}&apiKey=98d5f197f8a049caab878288cc9bf62f&page=1&pageSize=20`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parseddata= await data.json();
        this.setState({
            article:parseddata.articles,
            totalRecord:parseddata.totalResults,
             loading:false,
         });
    }
   componentDidMount(){
    //    this.getHeadlinesByCategory({country:this.props.country ,newsCategory: this.props.newsCategory});
       this.getHeadlinesByCategory();
    }
     handlePreviousClick=async()=>{
       this.setState({loading:true})
       const { cat, coun } = this.props;
        let url=`https://newsapi.org/v2/top-headlines?country=${coun}&&category=${cat}&apiKey=98d5f197f8a049caab878288cc9bf62f&page=${this.state.page-1}&pageSize=20`;
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.categoryType}&apiKey=98d5f197f8a049caab878288cc9bf62f&page=${this.state.page-1}&pageSize=20`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parseddata= await data.json();
        this.setState({
            page:this.state.page-1,
            article:parseddata.articles,
            loading:false
        })
        var nextBtnEle=document.getElementById("nextbtn").style.display="block";
        
    }
     handleNextClick=async()=>{
        const { cat, coun } = this.props;
        let url=`https://newsapi.org/v2/top-headlines?country=${coun}&&category=${cat}&apiKey=98d5f197f8a049caab878288cc9bf62f&page=${this.state.page-1}&pageSize=20`;
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.categoryType}&apiKey=98d5f197f8a049caab878288cc9bf62f&page=${this.state.page+1}&pageSize=20`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parseddata= await data.json();
        this.setState({
            page:this.state.page + 1,
            article:parseddata.articles,
            loading:false
        })
        var nextBtnEle=document.getElementById("nextbtn");
        if(nextBtnEle.disabled=true){
            nextBtnEle.style.display="none";
        }
    }

    componentWillReceiveProps(nextProps){
        this.getHeadlinesByCategory();
    }
     
    render() {
        // return (
        //     <>
        //         {this.props.cat}
        //     </>
        // )
        return (
            <>
                <div className="container my-3">
                    <h1 className="text-center">Top Headlines</h1>
                    {this.state.loading === true && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.article && this.state.article.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title !== null ? element.title.slice(0, 50) : ""} description={element.description !== null ? element.description.slice(0, 40) : ""} imageurl={element.urlToImage !== null ? element.urlToImage : "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button id="prevbtn" type="button" disabled={this.state.page <= 1} onClick={this.handlePreviousClick} className="btn btn-black">&larr;Previous</button>
                        <button id="nextbtn" type="button" disabled={this.state.page + 1 > (Math.ceil(this.state.totalRecord / 20))} onClick={this.handleNextClick} className="btn btn-black">Next&rarr;</button>
                    </div>
                </div>
            </>

        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        cat: state.cat.category,
        coun: state.cat.country
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setcat: (encp) => dispatch({ type: actions.CATEGORY, payload: encp })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);
// export default News;
