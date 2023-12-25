import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-district',
  standalone: true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent {
district:any=[
  {
    id:1,
    title:"Thiruvanathapuram",
    image:"../../../assets/images/thiru1.jpg",
    description:"Thiruvananthapuram also known as Trivandrum, is the capital and the largest city of the Indian state of Kerala. The city has a population is very high.",},
    {
      id:2,
      title:"kollam",
      image:"../../../assets/images/ollam1.jpg",
      description:"The heart land of Kollam is naturally veined by the Ashtamudi lake, a massive, multi-branched water body, which is also a popular boating attraction for tourists.",},
       {
        id:3,
        title:"pathanamthitta",
        image:"../../../assets/images/g1.jpg",
        description:"Pathanamthitta is the head quarters of Pathanamthitta district . The district was formed on Ist November 1982. It was carved out of Idukki, Alappuzha and Kollam .",},
          {
            id:4,
            title:"Alappuzha",
            image:"../../../assets/images/a1.jpg",
            description:"Alappuzha district is one of the 14 districts in the Indian state of Kerala. It was formed as Alleppey district on 17 August 1957, The name of the district is Alappuzha.",},
            {
              id:5,
              title:"Kottayam",
              image:"../../../assets/images/K1.jpg",
              description:"Kottayam is a city in the Indian state of Kerala. It is located in central Kerala and is also the administrative capital of Kottayam district also home to the Rubber Board.",},
            {
              id:6,
              title:"idukki",
              image:"../../../assets/images/id1.jpg",
              description:" The district was formed on Ist November 1982. It was carved out of Idukki, Alappuzha and Kollam districts. Its a beauty of nature.",},
                {
                  id:7,
                  title:"eranakulam",
                  image:"../../../assets/images/e1.jpg",
                  description:"The district houses two Urban Agglomerations, Kochi and Kothamangalam. Kochi is the largest city in the state, and 17th most populous in the country according metro city",},
                  {
                    id:8,
                    title:"Thirssur",
                    image:"../../../assets/images/t1.jpg",
                    description:"Thrissur must have been the site of human settlement. This is evidenced by the presence of a megalithic monuments at Ramavarmapuram, Kuttoor, Cherur and Villadam.",},
                    {
                      id:9,
                      title:"Palakkad",
                      image:"../../../assets/images/pa1.jpg",
                      description:"Palakkad is the gateway to Kerala due to the presence of the Palakkad Gap in the Western Ghats. The city is in central Kerala. Malayalam is the official ",},
                      {
                        id:10,
                        title:"Malappuram",
                        image:"../../../assets/images/mal1.jpg",
                        description:"Malappuram consist of 3 natural divisions, lowland, midland and highland. The low land stretches along the sea coast, the midland in the centre and the highland",},
                        {
                          id:11,
                          title:"Kozhikkodu",
                          image:"../../../assets/images/ko1.jpg",
                          description:"Kozhikode or Calicut district, is one of the 14 districts in the Indian state of Kerala, along its Southwestern Malabar Coast. The city of Kozhikode",},
                          {
                            id:12,
                            title:"Wayanad",
                            image:"../../../assets/images/way1.jpg",
                            description:"About Wayanad. Wayanad, the green paradise is nestled among the mountains of the Western Ghats, forming the border world of the greener part of Kerala",},
                          {
                            id:13,
                            title:"Kannur",
                            image:"../../../assets/images/kan1.jpg",
                            description:"Kannur is located north of Kozhikode, south of Kasargod and Mangalore, west of the Western Ghat regions of Kodagu and Wayanad, and east of the Laccadive Sea",},
                            {
                              id:14,
                              title:"kasargod",
                              image:"../../../assets/images/kos1.jpg",
                              description:"Kasaragod town is located on the estuary where the Chandragiri River, which is also the longest river in the district, empties into Arabian Sea. Kasaragod is home to several forts which include Arikady fort,",},

                              
                            

                           

                      
                  
                
            
          
      

    

]
}
