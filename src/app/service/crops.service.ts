import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Crop} from '../shared/model/crop';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  url = 'localhost:5000/crops';
  crops = [
    {
      climate: 'Brinjal is a \r\n  warm season crop and requires a long warm growing season. It is very susceptible to frost.',
      duration: '140 – 150 days after sowing',
      expenditure: 39166,
      name: 'Brinjal',
      temperature: 'Requires day temperature below 35℃ and night temperature of above 16℃. \r\n  Temperature below 15℃ will affect the growth of the plant as well as fruit quality.',
      water: 'Water requirement – Equivalent to 600-1000 mm of rainfall.\r\n  It cannot withstand excessive rainfall especially during flowering and fruit set'
    },
    {
      climate: 'Grows well in cool and moist climate. Heavy rains, cloudy weather at the time of curd \r\n  formation is harmful as it affects the head quality.',
      duration: '90-180  days after sowing',
      expenditure: 55450,
      name: 'Cabbage',
      temperature: 'High temperature leads to yellowing of heads. \r\n  A temperature range of 15-21°C is considered optimum for growth and curd formation of the crop.',
      water: 'Water requirement – Equivalent to 350-500 mm of rainfall'
    },
    {
      climate: 'Grows well in cool and dry weather.\r\n  It can not tolerate frost.',
      duration: '35-40 days after sowing',
      expenditure: 12384,
      name: 'Coriander',
      temperature: 'Coriander performs well at a temperature range of 20-30°C.\r\n  High temperature reduce germination percentage and vegetative growth.',
      water: 'Water requirement – Equivalent to 75-100 mm of rainfall.\r\n  Water should not be stagnated in field after emergence.'
    },
    {
      climate: 'Maize grows well in a wide range of climatic conditions.Essentially a warm weather crop.\r\n  It is however susceptible to frost at all stages of its growth.',
      duration: '100-120  days after sowing',
      expenditure: 26017,
      name: 'Maize',
      temperature: 'Grows under temperature ranging from 22-30℃, \r\n  although it can tolerate temperature as high as 35℃.',
      water: 'Crop required water equivalent to 500-800 mm of rainfall.\r\n  Inadequate soil moisture during flowering and grain filling period will markedly reduce the yield.'
    },
    {
      climate: 'Mango cannot stand severe frost, especially when the tree is young.Dry weather before \r\n  blossoming is good for profuse flowering.Rain during flowering is detrimental to the crop \r\n  as it interferes with pollination.',
      duration: '30-40 Years',
      expenditure: 37447,
      name: 'Mango',
      temperature: 'The ideal temperature range for mango is 24-30 °C during the growing season, along with high humidity. \r\n  High temperature by itself is not so injurious to mango',
      water: 'Crop required water equivalent to 900-1100 mm of rainfall.'
    },
    {
      climate: 'Warm and moist conditions are very favorable.Cool and wet climate, results in slow germination and seedling emergence, \r\n  increasing the risk of seed rot and seedling diseases.',
      duration: '110-120  days after sowing',
      expenditure: 27073,
      name: 'Groundnut',
      temperature: 'The optimum temperature for most rapid germination and \r\n  seedling development is about 30°C.Temperatures above 35°C inhibit the growth of groundnut.',
      water: 'Water requirement- Equivalent to 600-1500 mm of rainfall.'
    },
    {
      climate: 'This crop needs hot and humid climate and it is suited for region with prolonged sunshine and plenty of water.\r\n  More than 65 to 75 % humidity is good for rice.',
      duration: '160 days after sowing',
      expenditure: 14915,
      name: 'Paddy',
      temperature: 'Rice crop needs an average temperature of 21 to 35°C \r\n  It can tolerate 40 to 42°C at the maximum.',
      water: 'Adequate and well distributed rainfall during the growing season is essential for maximum \r\n  yield and quality of Rice.Rice is grown in areas receiving more than 800 mm rainfall.'
    },
    {
      climate: 'Chili pepper is better adapted to hot weather than is sweet pepper.Peppers are photoperiod-insensitive \r\n  (daylength does not affect flowering or fruit set).',
      duration: '200-220 days after sowing',
      expenditure: 74977,
      name: 'Red Chilli',
      temperature: 'Optimum day temperatures for chili pepper growth range from 20 to 30°C\r\n  It does not set fruit well when night temperatures are greater than 24°C.',
      water: 'Water requirement – Equivalent to 800-1200 mm of rainfall.'
    },
    {
      climate: 'Potato is preferred in regions where temperature during growing season is cool',
      duration: '100-110  days after sowing',
      expenditure: 45000,
      name: 'Potato',
      temperature: 'The vegetative growth is best at 24 °C \r\n  while tuber growth at 20 °C.A temperature ranging from 20-25°C is ideal for growth.',
      water: 'Water requirement – Equivalent to 500-700 mm of rainfall.'
    },
    {
      climate: 'Heavy rains, cloudy weather at the time of flowering and fruiting is harmful as it favours dropping of flowers and fruits.\r\n  The plants cannot withstand frost and high humidity. ',
      duration: '70-110 days after sowing',
      expenditure: 91897,
      name: 'Tomato',
      temperature: 'Temperature below 10°C retards plant development.\r\n  If temperature goes beyond 33°C, fruit development will be adversely affected.',
      water: 'Crop water requirement – equivalent to 600-1500 mm rainfall.'
    }
  ];

  constructor(private http: HttpClient) { }

  getCropDetails(): Observable<Crop[]> {
    return  this.http.get<Crop[]>(this.url + '/cropDetails');
  }
}
