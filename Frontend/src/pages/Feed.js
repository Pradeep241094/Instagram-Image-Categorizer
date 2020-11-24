import React, { Component } from 'react'
import axios from 'axios';
import SearchField from "react-search-field";
import Search from 'react-search'
import './Feed.css';
import Gallery from 'react-grid-gallery';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const API_URL = 'http://localhost:5000/'

class Feed extends Component {
    constructor (props) {
        super(props)
        this.state = { 
        results: {},
        query: '',
        }
      }
     

  getInfo = () => {
    const {query}= this.state;
    axios.get(`${API_URL}?location=${query}`)
      .then(({ data }) => {
          console.log('data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.', data)
        this.setState({
          results: data
        })
      })
  }


  handleInputChange(value) {
    this.setState({
      query: value
    })
  }

  render() {
      const {results} = this.state;

      const IMAGES =
    [{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Nature", title: "Nature" }],
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://files.snapfashion.co.uk/web/homepage/women/shortcuts/tops.jpg",
        thumbnail: "https://files.snapfashion.co.uk/web/homepage/women/shortcuts/tops.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Fashion", title: "Fashion" }],
        caption: "Fashion (Jeshu John - designerspics.com)"
    },
     {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Nature", title: "Nature" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&w=1000&q=80",
        thumbnail: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&w=1000&q=80",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Building", title: "Building" }],
        caption: "Buildings (Jeshu John - designerspics.com)"
    },
    {
        src: "https://www.honeywell.com/content/dam/honeywell/en-us/images/connected-building/C8B-content-carousel/ConnectedBuildingThoughtLeadership1424x950.jpg",
        thumbnail: "https://www.honeywell.com/content/dam/honeywell/en-us/images/connected-building/C8B-content-carousel/ConnectedBuildingThoughtLeadership1424x950.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Building", title: "Building" }],
        caption: "Buildings (Jeshu John - designerspics.com)"
    },
   
   
    {
        src: "https://quizzma.com/wp-content/uploads/2020/08/after-10-12-art-design-college.jpg",
        thumbnail: "https://quizzma.com/wp-content/uploads/2020/08/after-10-12-art-design-college.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Art", title: "Art" }],
        caption: "Art (Jeshu John - designerspics.com)"
    }, {
        src: "https://media.mutualart.com/Images/Home/slideexhib.jpg",
        thumbnail: "https://media.mutualart.com/Images/Home/slideexhib.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Art", title: "Art" }],
        caption: "Art (Jeshu John - designerspics.com)"
    }, {
        src: "https://d2qs8jo5daq3wi.cloudfront.net/photos/142180/large/IMG_1635Madhubani__Baua_devi__size-59X43_Rs.75000_.JPG?1438259063",
        thumbnail: "https://d2qs8jo5daq3wi.cloudfront.net/photos/142180/large/IMG_1635Madhubani__Baua_devi__size-59X43_Rs.75000_.JPG?1438259063",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Art", title: "Art" }],
        caption: "Art (Jeshu John - designerspics.com)"
    },
    {
        src: "https://assets.imgix.net/examples/vista_w900.png",
        thumbnail: "https://assets.imgix.net/examples/vista_w900.png",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Nature", title: "Nature" }],
        caption: "Natures Wine Yard"
    },
    {
        src: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing-happy-cheerful-couple-sunglasses-showing-peace-sign_158538-5001.jpg?size=626&ext=jpg",
        thumbnail: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing-happy-cheerful-couple-sunglasses-showing-peace-sign_158538-5001.jpg?size=626&ext=jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Fashion", title: "Fashion" }],
        caption: "Fashion (Jeshu John - designerspics.com)"
    },

    {
        src: "https://i.pinimg.com/600x315/14/09/ab/1409ab178fb9a2fb65c602aeae0741da.jpg",
        thumbnail: "https://i.pinimg.com/600x315/14/09/ab/1409ab178fb9a2fb65c602aeae0741da.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Nature", title: "Nature" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Art", title: "Art" }],
    },
    {
        src: "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        thumbnail: "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "People", title: "People" }],
        caption: "People (Jeshu John - designerspics.com)"
    },
    {
        src: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190130190608/Malabar-Thali.jpg",
        thumbnail: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190130190608/Malabar-Thali.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Food", title: "Food" }],
        caption: "Food (Jeshu John - designerspics.com)"
    },
    {
        src: "https://image.cnbcfm.com/api/v1/image/106708749-1600466131926Free-Assembly-Mens-Lifestyle-jpg?v=1600466257",
        thumbnail: "https://image.cnbcfm.com/api/v1/image/106708749-1600466131926Free-Assembly-Mens-Lifestyle-jpg?v=1600466257",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Fashion", title: "Fashion" }],
        caption: "Fashion (Jeshu John - designerspics.com)"
    }, 
    {
        src: "https://i.pinimg.com/originals/5c/9f/c8/5c9fc89ac6c071663794ea44789dc90a.jpg",
        thumbnail: "https://i.pinimg.com/originals/5c/9f/c8/5c9fc89ac6c071663794ea44789dc90a.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Nature", title: "Nature" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    }, 
 
    {
        src: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
        thumbnail: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Food", title: "Food" }],
        caption: "Food (Jeshu John - designerspics.com)"
    },
  
    {
        src: "https://data.whicdn.com/images/324609103/original.jpg",
        thumbnail: "https://data.whicdn.com/images/324609103/original.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Nature", title: "Nature" }],
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/31121724/fashion-1024x682.jpeg",
        thumbnail: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/31121724/fashion-1024x682.jpeg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Fashion", title: "Fashion" }],
        caption: "Fashion (Jeshu John - designerspics.com)"
    }, 
    {
        src: "https://images.unsplash.com/photo-1569063386798-345908ef9a62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        thumbnail: "https://images.unsplash.com/photo-1569063386798-345908ef9a62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Art", title: "Art" }],
        caption: "Art (Jeshu John - designerspics.com)"
    }, {
        src: "https://images.squarespace-cdn.com/content/v1/54712c28e4b03a581d86de9f/1584723881674-YPCHYQG69I5WHQ2LP6EX/ke17ZwdGBToddI8pDm48kI9-2bxq9ubQOKoCdTXlmbp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQzQpcF0lV0o97e52VJ-laA4F6gfrU6sxw1dV8G1gSrbHqsZyj6nApxb6bWEhURKFg/UBT5HJNBZBD6POC2L3WAGE2SFM.jpg",
        thumbnail: "https://images.squarespace-cdn.com/content/v1/54712c28e4b03a581d86de9f/1584723881674-YPCHYQG69I5WHQ2LP6EX/ke17ZwdGBToddI8pDm48kI9-2bxq9ubQOKoCdTXlmbp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQzQpcF0lV0o97e52VJ-laA4F6gfrU6sxw1dV8G1gSrbHqsZyj6nApxb6bWEhURKFg/UBT5HJNBZBD6POC2L3WAGE2SFM.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Art", title: "Art" }],
        caption: "Monalisa (Jeshu John - designerspics.com)"
    },
 
    {
        src: "https://thumbs.dreamstime.com/b/liver-detox-diet-food-concept-fruits-vegetables-nuts-olive-oil-garlic-cleansing-body-healthy-eating-top-view-flat-lay-liver-166983115.jpg",
        thumbnail:"https://thumbs.dreamstime.com/b/liver-detox-diet-food-concept-fruits-vegetables-nuts-olive-oil-garlic-cleansing-body-healthy-eating-top-view-flat-lay-liver-166983115.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Food", title: "Food" }],
        caption: "Food (Jeshu John - designerspics.com)"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScUqGS06pFFueD7IhPYdjJs-JDo3JGVHJUZQ&usqp=CAU",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScUqGS06pFFueD7IhPYdjJs-JDo3JGVHJUZQ&usqp=CAU",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Fashion", title: "Fashion" }],
        caption: "Fashion (Jeshu John - designerspics.com)"
    },
    {
        src: "https://www.bl.uk/britishlibrary/~/media/bl/global/business%20and%20ip%20centre/images/industry%20guides/fashion.jpg?la=en&hash=5D8E6D04C7CA8DA02882CB2EA265B30B",
        thumbnail: "https://www.bl.uk/britishlibrary/~/media/bl/global/business%20and%20ip%20centre/images/industry%20guides/fashion.jpg?la=en&hash=5D8E6D04C7CA8DA02882CB2EA265B30B",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Fashion", title: "Fashion" }],
        caption: "Fashion (Jeshu John - designerspics.com)"
    }, 
     {
        src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/032519-2000s-1553529999.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        thumbnail: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/032519-2000s-1553529999.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Fashion", title: "Fashion" }],
        caption: "Fashion (Jeshu John - designerspics.com)"
    },
  
    {
        src: "https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg",
        thumbnail: "https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Food", title: "Food" }],
        caption: "Food (Jeshu John - designerspics.com)"
    },
    {
        src: "https://cdn.mos.cms.futurecdn.net/jU9nZr98m8nuAzqGrqyMWF-1200-80.jpg",
        thumbnail: "https://cdn.mos.cms.futurecdn.net/jU9nZr98m8nuAzqGrqyMWF-1200-80.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Art", title: "Art" }],
        caption: "Grafitti (Jeshu John - designerspics.com)"
    },
    {
        src: "https://www.thestar.com/content/dam/thestar/columnist_logos/francis_angelyn_logo2020.jpg",
        thumbnail: "https://www.thestar.com/content/dam/thestar/columnist_logos/francis_angelyn_logo2020.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "People", title: "People" }],
        caption: "People (Jeshu John - designerspics.com)"
    },
    {
        src: "https://i.insider.com/5c0192d1de34c43da26049d4?width=1100&format=jpeg&auto=webp",
        thumbnail:"https://i.insider.com/5c0192d1de34c43da26049d4?width=1100&format=jpeg&auto=webp",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Food", title: "Food" }],
        caption: "Food (Jeshu John - designerspics.com)"
    },
    {
        src: "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg",
        thumbnail: "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Food", title: "Food" }],
        caption: "Food (Jeshu John - designerspics.com)"
    },
    {
        src:  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Fashion", title: "Fashion" }],
        caption: "Fashion (Jeshu John - designerspics.com)"
    },
  
    {
        src: "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg",
        thumbnail: "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Building", title: "Building" }],
        caption: "Buildings (Jeshu John - designerspics.com)"
    },
   
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHOhdjJea-IDk9v2Tsf6_f_lcUrgltO7xdoQ&usqp=CAU",
        thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHOhdjJea-IDk9v2Tsf6_f_lcUrgltO7xdoQ&usqp=CAU",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Building", title: "Building" }],
        caption: "Buildings (Jeshu John - designerspics.com)"
    },
    {
        src: "https://i.pinimg.com/originals/9c/35/b6/9c35b6f309d2e060e548964febe6dcff.jpg",
        thumbnail: "https://i.pinimg.com/originals/9c/35/b6/9c35b6f309d2e060e548964febe6dcff.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Nature", title: "Nature" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://roadmap2050.report/static/files/photo-building.jpg",
        thumbnail: "https://roadmap2050.report/static/files/photo-building.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Building", title: "Building" }],
        caption: "Buildings (Jeshu John - designerspics.com)"
    },
    {
        src: "https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?k=6&m=1146473249&s=612x612&w=0&h=W1xeAt6XW3evkprjdS4mKWWtmCVjYJnmp-LHvQstitU=",
        thumbnail: "https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?k=6&m=1146473249&s=612x612&w=0&h=W1xeAt6XW3evkprjdS4mKWWtmCVjYJnmp-LHvQstitU=",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "People", title: "People" }],
        caption: "People (Jeshu John - designerspics.com)"
    },
   
    {
        src: "https://www.lacma.org/sites/default/files/styles/exhibition_image/public/primary_image/2018-11/M77_19_17.jpg?itok=hJwU5EZR",
        thumbnail: "https://www.lacma.org/sites/default/files/styles/exhibition_image/public/primary_image/2018-11/M77_19_17.jpg?itok=hJwU5EZR",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Art", title: "Art" }],
        caption: "Art (Jeshu John - designerspics.com)"
    }, 
    {
        src: "https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc5MDg2OTc3MDY2NzE5/home-insurance-building.jpg",
        thumbnail:"https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc5MDg2OTc3MDY2NzE5/home-insurance-building.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Building", title: "Building" }],
        caption: "Buildings (Jeshu John - designerspics.com)"
    }, 
    {
        src: "https://jooinn.com/images/crowd-of-people-6.jpg",
        thumbnail:"https://jooinn.com/images/crowd-of-people-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "People", title: "People" }],
        caption: "People (Jeshu John - designerspics.com)"
    },
    {
        src: "https://mittalsouthasiainstitute.harvard.edu/wp-content/uploads/2019/03/Screen-Shot-2019-03-21-at-9.04.43-AM-2.jpg",
        thumbnail: "https://mittalsouthasiainstitute.harvard.edu/wp-content/uploads/2019/03/Screen-Shot-2019-03-21-at-9.04.43-AM-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Art", title: "Art" }],
        caption: "Art (Jeshu John - designerspics.com)"
    },
];

    const NatureImages = [
        {
            src: "https://i.pinimg.com/originals/5c/9f/c8/5c9fc89ac6c071663794ea44789dc90a.jpg",
            thumbnail: "https://i.pinimg.com/originals/5c/9f/c8/5c9fc89ac6c071663794ea44789dc90a.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Nature", title: "Nature" }],
            caption: "Boats (Jeshu John - designerspics.com)"
        }, 
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Nature", title: "Nature" }],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Nature", title: "Nature" }],
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://i.pinimg.com/600x315/14/09/ab/1409ab178fb9a2fb65c602aeae0741da.jpg",
            thumbnail: "https://i.pinimg.com/600x315/14/09/ab/1409ab178fb9a2fb65c602aeae0741da.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Nature", title: "Nature" }],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Nature", title: "Nature" }],
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://assets.imgix.net/examples/vista_w900.png",
            thumbnail: "https://assets.imgix.net/examples/vista_w900.png",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Nature", title: "Nature" }],
            caption: "Natures Wine Yard"
        },
        {
            src: "https://data.whicdn.com/images/324609103/original.jpg",
            thumbnail: "https://data.whicdn.com/images/324609103/original.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Nature", title: "Nature" }],
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://i.pinimg.com/originals/9c/35/b6/9c35b6f309d2e060e548964febe6dcff.jpg",
            thumbnail: "https://i.pinimg.com/originals/9c/35/b6/9c35b6f309d2e060e548964febe6dcff.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Nature", title: "Nature" }],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
    ]
   
    const ArtImages = [
        {
            src: "https://images.unsplash.com/photo-1569063386798-345908ef9a62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            thumbnail: "https://images.unsplash.com/photo-1569063386798-345908ef9a62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Art", title: "Art" }],
            caption: "Art (Jeshu John - designerspics.com)"
        }, {
            src: "https://images.squarespace-cdn.com/content/v1/54712c28e4b03a581d86de9f/1584723881674-YPCHYQG69I5WHQ2LP6EX/ke17ZwdGBToddI8pDm48kI9-2bxq9ubQOKoCdTXlmbp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQzQpcF0lV0o97e52VJ-laA4F6gfrU6sxw1dV8G1gSrbHqsZyj6nApxb6bWEhURKFg/UBT5HJNBZBD6POC2L3WAGE2SFM.jpg",
            thumbnail: "https://images.squarespace-cdn.com/content/v1/54712c28e4b03a581d86de9f/1584723881674-YPCHYQG69I5WHQ2LP6EX/ke17ZwdGBToddI8pDm48kI9-2bxq9ubQOKoCdTXlmbp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQzQpcF0lV0o97e52VJ-laA4F6gfrU6sxw1dV8G1gSrbHqsZyj6nApxb6bWEhURKFg/UBT5HJNBZBD6POC2L3WAGE2SFM.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Art", title: "Art" }],
            caption: "Monalisa (Jeshu John - designerspics.com)"
        }, {
            src: "https://cdn.mos.cms.futurecdn.net/jU9nZr98m8nuAzqGrqyMWF-1200-80.jpg",
            thumbnail: "https://cdn.mos.cms.futurecdn.net/jU9nZr98m8nuAzqGrqyMWF-1200-80.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Art", title: "Art" }],
            caption: "Grafitti (Jeshu John - designerspics.com)"
        }, {
            src: "https://quizzma.com/wp-content/uploads/2020/08/after-10-12-art-design-college.jpg",
            thumbnail: "https://quizzma.com/wp-content/uploads/2020/08/after-10-12-art-design-college.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Art", title: "Art" }],
            caption: "Art (Jeshu John - designerspics.com)"
        }, {
            src: "https://media.mutualart.com/Images/Home/slideexhib.jpg",
            thumbnail: "https://media.mutualart.com/Images/Home/slideexhib.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Art", title: "Art" }],
            caption: "Art (Jeshu John - designerspics.com)"
        }, {
            src: "https://d2qs8jo5daq3wi.cloudfront.net/photos/142180/large/IMG_1635Madhubani__Baua_devi__size-59X43_Rs.75000_.JPG?1438259063",
            thumbnail: "https://d2qs8jo5daq3wi.cloudfront.net/photos/142180/large/IMG_1635Madhubani__Baua_devi__size-59X43_Rs.75000_.JPG?1438259063",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Art", title: "Art" }],
            caption: "Art (Jeshu John - designerspics.com)"
        }, {
            src: "https://www.lacma.org/sites/default/files/styles/exhibition_image/public/primary_image/2018-11/M77_19_17.jpg?itok=hJwU5EZR",
            thumbnail: "https://www.lacma.org/sites/default/files/styles/exhibition_image/public/primary_image/2018-11/M77_19_17.jpg?itok=hJwU5EZR",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Art", title: "Art" }],
            caption: "Art (Jeshu John - designerspics.com)"
        }, {
            src: "https://mittalsouthasiainstitute.harvard.edu/wp-content/uploads/2019/03/Screen-Shot-2019-03-21-at-9.04.43-AM-2.jpg",
            thumbnail: "https://mittalsouthasiainstitute.harvard.edu/wp-content/uploads/2019/03/Screen-Shot-2019-03-21-at-9.04.43-AM-2.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Art", title: "Art" }],
            caption: "Art (Jeshu John - designerspics.com)"
        },
    ];

    const FashionImages = [
        {
            src:  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Fashion", title: "Fashion" }],
            caption: "Fashion (Jeshu John - designerspics.com)"
        }, {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScUqGS06pFFueD7IhPYdjJs-JDo3JGVHJUZQ&usqp=CAU",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScUqGS06pFFueD7IhPYdjJs-JDo3JGVHJUZQ&usqp=CAU",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Fashion", title: "Fashion" }],
            caption: "Fashion (Jeshu John - designerspics.com)"
        }, {
            src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/032519-2000s-1553529999.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            thumbnail: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/032519-2000s-1553529999.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Fashion", title: "Fashion" }],
            caption: "Fashion (Jeshu John - designerspics.com)"
        }, {
            src: "https://files.snapfashion.co.uk/web/homepage/women/shortcuts/tops.jpg",
            thumbnail: "https://files.snapfashion.co.uk/web/homepage/women/shortcuts/tops.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Fashion", title: "Fashion" }],
            caption: "Fashion (Jeshu John - designerspics.com)"
        }, {
            src: "https://image.cnbcfm.com/api/v1/image/106708749-1600466131926Free-Assembly-Mens-Lifestyle-jpg?v=1600466257",
            thumbnail: "https://image.cnbcfm.com/api/v1/image/106708749-1600466131926Free-Assembly-Mens-Lifestyle-jpg?v=1600466257",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Fashion", title: "Fashion" }],
            caption: "Fashion (Jeshu John - designerspics.com)"
        }, {
            src: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/31121724/fashion-1024x682.jpeg",
            thumbnail: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/31121724/fashion-1024x682.jpeg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Fashion", title: "Fashion" }],
            caption: "Fashion (Jeshu John - designerspics.com)"
        }, {
            src: "https://www.bl.uk/britishlibrary/~/media/bl/global/business%20and%20ip%20centre/images/industry%20guides/fashion.jpg?la=en&hash=5D8E6D04C7CA8DA02882CB2EA265B30B",
            thumbnail: "https://www.bl.uk/britishlibrary/~/media/bl/global/business%20and%20ip%20centre/images/industry%20guides/fashion.jpg?la=en&hash=5D8E6D04C7CA8DA02882CB2EA265B30B",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Fashion", title: "Fashion" }],
            caption: "Fashion (Jeshu John - designerspics.com)"
        }, {
            src: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing-happy-cheerful-couple-sunglasses-showing-peace-sign_158538-5001.jpg?size=626&ext=jpg",
            thumbnail: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing-happy-cheerful-couple-sunglasses-showing-peace-sign_158538-5001.jpg?size=626&ext=jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Fashion", title: "Fashion" }],
            caption: "Fashion (Jeshu John - designerspics.com)"
        },
    ];

    const PeopleImages = [
       
        {
            src: "https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?k=6&m=1146473249&s=612x612&w=0&h=W1xeAt6XW3evkprjdS4mKWWtmCVjYJnmp-LHvQstitU=",
            thumbnail: "https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?k=6&m=1146473249&s=612x612&w=0&h=W1xeAt6XW3evkprjdS4mKWWtmCVjYJnmp-LHvQstitU=",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "People", title: "People" }],
            caption: "People (Jeshu John - designerspics.com)"
        },
        {
            src: "https://www.thestar.com/content/dam/thestar/columnist_logos/francis_angelyn_logo2020.jpg",
            thumbnail: "https://www.thestar.com/content/dam/thestar/columnist_logos/francis_angelyn_logo2020.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "People", title: "People" }],
            caption: "People (Jeshu John - designerspics.com)"
        },
        {
            src: "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            thumbnail: "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "People", title: "People" }],
            caption: "People (Jeshu John - designerspics.com)"
        },
        {
            src: "https://jooinn.com/images/crowd-of-people-6.jpg",
            thumbnail:"https://jooinn.com/images/crowd-of-people-6.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "People", title: "People" }],
            caption: "People (Jeshu John - designerspics.com)"
        },
       
    ];

    const FoodImages = [ 
        {
            src: "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg",
            thumbnail: "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Food", title: "Food" }],
            caption: "Food (Jeshu John - designerspics.com)"
        },
        {
            src: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190130190608/Malabar-Thali.jpg",
            thumbnail: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190130190608/Malabar-Thali.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Food", title: "Food" }],
            caption: "Food (Jeshu John - designerspics.com)"
        },
        {
            src: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
            thumbnail: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Food", title: "Food" }],
            caption: "Food (Jeshu John - designerspics.com)"
        },
        {
            src: "https://thumbs.dreamstime.com/b/liver-detox-diet-food-concept-fruits-vegetables-nuts-olive-oil-garlic-cleansing-body-healthy-eating-top-view-flat-lay-liver-166983115.jpg",
            thumbnail:"https://thumbs.dreamstime.com/b/liver-detox-diet-food-concept-fruits-vegetables-nuts-olive-oil-garlic-cleansing-body-healthy-eating-top-view-flat-lay-liver-166983115.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Food", title: "Food" }],
            caption: "Food (Jeshu John - designerspics.com)"
        },
        {
            src: "https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg",
            thumbnail: "https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Food", title: "Food" }],
            caption: "Food (Jeshu John - designerspics.com)"
        },
        {
            src: "https://i.insider.com/5c0192d1de34c43da26049d4?width=1100&format=jpeg&auto=webp",
            thumbnail:"https://i.insider.com/5c0192d1de34c43da26049d4?width=1100&format=jpeg&auto=webp",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Food", title: "Food" }],
            caption: "Food (Jeshu John - designerspics.com)"
        },   
    ];
    const Buildings = [
        {
            src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&w=1000&q=80",
            thumbnail: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&w=1000&q=80",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Building", title: "Building" }],
            caption: "Buildings (Jeshu John - designerspics.com)"
        },
        {
            src: "https://www.honeywell.com/content/dam/honeywell/en-us/images/connected-building/C8B-content-carousel/ConnectedBuildingThoughtLeadership1424x950.jpg",
            thumbnail: "https://www.honeywell.com/content/dam/honeywell/en-us/images/connected-building/C8B-content-carousel/ConnectedBuildingThoughtLeadership1424x950.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Building", title: "Building" }],
            caption: "Buildings (Jeshu John - designerspics.com)"
        },
        {
            src: "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg",
            thumbnail: "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Building", title: "Building" }],
            caption: "Buildings (Jeshu John - designerspics.com)"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHOhdjJea-IDk9v2Tsf6_f_lcUrgltO7xdoQ&usqp=CAU",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHOhdjJea-IDk9v2Tsf6_f_lcUrgltO7xdoQ&usqp=CAU",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Building", title: "Building" }],
            caption: "Buildings (Jeshu John - designerspics.com)"
        },
        {
            src: "https://roadmap2050.report/static/files/photo-building.jpg",
            thumbnail: "https://roadmap2050.report/static/files/photo-building.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Building", title: "Building" }],
            caption: "Buildings (Jeshu John - designerspics.com)"
        },
        {
            src: "https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc5MDg2OTc3MDY2NzE5/home-insurance-building.jpg",
            thumbnail:"https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc5MDg2OTc3MDY2NzE5/home-insurance-building.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Building", title: "Building" }],
            caption: "Buildings (Jeshu John - designerspics.com)"
        },   
    ];
    return (
        <div>
              <div style={{ marginLeft: '10%', marginRight: '10%', width: '80%' }}>
                
                  <div style={{ marginTop: 16, marginBottom: 16, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                  <input
              name="Location Search"
              type="text"
              value={this.state.query}
              onChange={(event) =>this.setState({
                query: event.target.value
              })}
            />
        <button onClick={this.getInfo}> Search Location </button>
        </div>
           
    <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Nature</Tab>
      <Tab>Art</Tab>
      <Tab>Fashion</Tab>
      <Tab>People</Tab>
      <Tab>Food</Tab>
      <Tab>Buildings</Tab>
    </TabList>
    <TabPanel>
    <Gallery images={results.All || IMAGES}/>
    </TabPanel>
    <TabPanel>
    <Gallery images={results.Nature || NatureImages}/>
    </TabPanel>
    <TabPanel>
    <Gallery images={results.Art || ArtImages}/>
    </TabPanel>
    <TabPanel>
    <Gallery images={results.Fashion || FashionImages}/>
    </TabPanel>
    <TabPanel>
    <Gallery images={results.People || PeopleImages}/>
    </TabPanel>
    <TabPanel>
    <Gallery images={results.Food || FoodImages}/>
    </TabPanel>
    <TabPanel>
    <Gallery images= {results.Buildings || Buildings}/>
    </TabPanel>
  </Tabs>
            </div>
        </div>
        </div>
     
    )
  }
}

export default Feed
