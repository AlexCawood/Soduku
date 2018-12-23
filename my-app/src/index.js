import React from 'react';
import ReactDOM from 'react-dom';
import timer from 'react-timer-hoc';
import './index.css';
import writeFile from 'write-file';

// function makePuzzle(){
//   const puzzle = new Array(9).map(x =>(x = new Array(9)));
// }
//These are the boards that the player playes on stored as data in objects
const board ={
  1:{'1,1':'2','1,2':'6','1,3':'4','2,1':'1','2,2':'','2,3':'5','3,1':'7','3,2':'','3,3':''
},2:{'1,1':'','1,2':'5','1,3':'','2,1':'','2,2':'9','2,3':'2','3,1':'3','3,2':'6','3,3':''
},3:{'1,1':'','1,2':'','1,3':'','2,1':'7','2,2':'6','2,3':'','3,1':'2','3,2':'','3,3':''
},4:{'1,1':'','1,2':'','1,3':'','2,1':'8','2,2':'','2,3':'','3,1':'5','3,2':'9','3,3':'2'
  },5:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':''
},6:{'1,1':'5','1,2':'2','1,3':'3','2,1':'','2,2':'','2,3':'1','3,1':'','3,2':'','3,3':''
},7:{'1,1':'','1,2':'','1,3':'7','2,1':'','2,2':'5','2,3':'1','3,1':'','3,2':'','3,3':''
},8:{'1,1':'','1,2':'4','1,3':'3','2,1':'6','2,2':'8','2,3':'','3,1':'','3,2':'1','3,3':''
},9:{'1,1':'','1,2':'','1,3':'6','2,1':'9','2,2':'','2,3':'2','3,1':'3','3,2':'5','3,3':'7'
  },
  };
  const solution1 ={
  1:{'1,1':'2','1,2':'6','1,3':'4','2,1':'1','2,2':'3','2,3':'5','3,1':'7','3,2':'8','3,3':'9'
},2:{'1,1':'7','1,2':'5','1,3':'1','2,1':'8','2,2':'9','2,3':'2','3,1':'3','3,2':'6','3,3':'4'
},3:{'1,1':'8','1,2':'3','1,3':'9','2,1':'7','2,2':'6','2,3':'4','3,1':'2','3,2':'1','3,3':'5'
},4:{'1,1':'4','1,2':'1','1,3':'6','2,1':'8','2,2':'7','2,3':'3','3,1':'5','3,2':'9','3,3':'2'
},5:{'1,1':'9','1,2':'7','1,3':'8','2,1':'4','2,2':'2','2,3':'5','3,1':'1','3,2':'3','3,3':'6'
},6:{'1,1':'5','1,2':'2','1,3':'3','2,1':'6','2,2':'9','2,3':'1','3,1':'4','3,2':'7','3,3':'8'
},7:{'1,1':'9','1,2':'2','1,3':'7','2,1':'3','2,2':'5','2,3':'1','3,1':'6','3,2':'4','3,3':'8'
},8:{'1,1':'5','1,2':'4','1,3':'3','2,1':'8','2,2':'6','2,3':'7','3,1':'2','3,2':'1','3,3':'9'
},9:{'1,1':'1','1,2':'8','1,3':'6','2,1':'9','2,2':'4','2,3':'2','3,1':'3','3,2':'5','3,3':'7'
  },
  };
const board2 ={
1:{'1,1':'','1,2':'5','1,3':'','2,1':'3','2,2':'','2,3':'1','3,1':'','3,2':'','3,3':'6'
},2:{'1,1':'','1,2':'7','1,3':'','2,1':'','2,2':'','2,3':'7','3,1':'2','3,2':'1','3,3':'3'
},3:{'1,1':'3','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'5','3,2':'','3,3':''
},4:{'1,1':'','1,2':'1','1,3':'','2,1':'','2,2':'7','2,3':'5','3,1':'','3,2':'','3,3':'9'
},5:{'1,1':'8','1,2':'3','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'2','3,3':'7'
},6:{'1,1':'4','1,2':'','1,3':'','2,1':'2','2,2':'3','2,3':'','3,1':'','3,2':'6','3,3':''
},7:{'1,1':'','1,2':'','1,3':'7','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':'4'
},8:{'1,1':'4','1,2':'9','1,3':'1','2,1':'7','2,2':'','2,3':'','3,1':'','3,2':'6','3,3':''
},9:{'1,1':'6','1,2':'','1,3':'','2,1':'9','2,2':'','2,3':'2','3,1':'','3,2':'7','3,3':''
},
};
const randoBoard ={
1:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':''
},2:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':''
},3:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':''
},4:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':''
},5:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':''
},6:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':''
},7:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':''
},8:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':''
},9:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'','2,3':'','3,1':'','3,2':'','3,3':''
},
};
const board3 ={
1:{'1,1':'','1,2':'','1,3':'4','2,1':'','2,2':'9','2,3':'','3,1':'2','3,2':'','3,3':''
},2:{'1,1':'','1,2':'','1,3':'','2,1':'','2,2':'5','2,3':'3','3,1':'9','3,2':'8','3,3':''
},3:{'1,1':'2','1,2':'9','1,3':'','2,1':'','2,2':'','2,3':'1','3,1':'','3,2':'','3,3':'3'
},4:{'1,1':'4','1,2':'8','1,3':'','2,1':'6','2,2':'2','2,3':'','3,1':'','3,2':'','3,3':'9'
},5:{'1,1':'','1,2':'','1,3':'2','2,1':'','2,2':'9','2,3':'','3,1':'8','3,2':'','3,3':''
},6:{'1,1':'5','1,2':'','1,3':'','2,1':'','2,2':'1','2,3':'7','3,1':'','3,2':'3','3,3':'2'
},7:{'1,1':'8','1,2':'','1,3':'','2,1':'3','2,2':'','2,3':'','3,1':'','3,2':'4','3,3':'1'
},8:{'1,1':'','1,2':'4','1,3':'9','2,1':'5','2,2':'1','2,3':'','3,1':'','3,2':'','3,3':''
},9:{'1,1':'','1,2':'','1,3':'6','2,1':'','2,2':'8','2,3':'','3,1':'3','3,2':'','3,3':''
},
};



//these are the small squares that have the drop down lists or numbers in them
function Square(props){
    //console.log(props.value);
    const arr = [1,2,3,4,5,6,7,8,9];
    //const randomNum = Math.floor(Math.random()*10);
    let value = (props || {}).coord;
    if(value !== ''){
    return(
        <div className="square">
        <p>{value}</p>
        </div>);
  }
    else {
      //let rando =Math.floor(Math.random()*9)+1;
      return (
        <div className="square">
        <select onChange={(e) => props.value({num:e.target.value})}>
        <option value='.'>.</option>
        {arr.map(x =>
          <option value={x}>{x}</option>
        )}
        {/*  <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option> */}
          </select>
      </div>
      );
    }


}

//the region is made up of squares and forms a section
class Region extends React.Component{
  constructor(props){
    super(props);

    this.handleSquare1 = this.handleSquare1.bind(this);
    this.handleSquare2 = this.handleSquare2.bind(this);
    this.handleSquare3 = this.handleSquare3.bind(this);
    this.handleSquare4 = this.handleSquare4.bind(this);
    this.handleSquare5= this.handleSquare5.bind(this);
    this.handleSquare6 = this.handleSquare6.bind(this);
    this.handleSquare7 = this.handleSquare7.bind(this);
    this.handleSquare8 = this.handleSquare8.bind(this);
    this.handleSquare9 = this.handleSquare9.bind(this);
    this.checkSumOfRegion = this.checkSumOfRegion.bind(this);
    this.state = {};
  }
  handleSquare1(value){

    this.props.value({'1,1':parseInt(value.num)});
    this.setState({'1,1':parseInt(value.num)},()=>{  console.log(this.state['1,1']);});
    // let num = value.num;
    // this.setState({[0,0]:parseInt(num.value)});\
    this.checkSumOfRegion();
  }
  handleSquare2(value){

    this.props.value({'1,2':parseInt(value.num)});
    this.setState({'1,2':parseInt(value.num)});
    // let num = value.num;
    // console.log(num);
    // this.coords.splice(0[1],0,num);
    // console.log(this.coords);
  }
  handleSquare3(value){
    this.props.value({'1,3':parseInt(value.num)});
    this.setState({'1,3':parseInt(value.num)});
  }
  handleSquare4(value){
    this.props.value({'2,1':parseInt(value.num)});
    this.setState({'2,1':parseInt(value.num)});
  }
  handleSquare5(value){
    this.props.value({'2,2':parseInt(value.num)});
    this.setState({'2,2':parseInt(value.num)});
  }
  handleSquare6(value){
    this.props.value({'2,3':parseInt(value.num)});
    this.setState({'2,3':parseInt(value.num)});
  }
  handleSquare7(value){
    this.props.value({'3,1':parseInt(value.num)});
    this.setState({'3,1':parseInt(value.num)});
  }
  handleSquare8(value){
    this.props.value({'3,2':parseInt(value.num)});
    this.setState({'3,2':parseInt(value.num)});
  }
  handleSquare9(value){
    this.props.value({'3,3':parseInt(value.num)});
    this.setState({'3,3':parseInt(value.num)});
  }
  // this was a attempt to get total out of a region.
  checkSumOfRegion(){
    const arrValues = [];
    let total = 0;
    for (let key in this.state){
      arrValues.push(this.state[key]);
    }
    if (arrValues.length>0){
      total = arrValues.reduce((a,b) => a+b);
    }
    //this.props.TotalValue({total:total});
    return total;
  }
  // componentDidMount(){
  //   let keys =[];
  //   for(let key in this.props.region){
  //     keys.push(key);
  //   }
  //   for(let key in this.props.region){
  //   for (var i = 0; i <= keys.length; i++) {
  //     if (this.props.region[key] === this.props.region[keys[i+1] ]){
  //       this.props.region[key] = '';
  //     }
  //   }
  // }
  //   console.log(keys);
  // }

  render(){
    return(
      <div className="region">
        <Square value={this.handleSquare1} coord={this.props.region['1,1']}/>
        <Square value={this.handleSquare2} coord={this.props.region['1,2']}/>
        <Square value={this.handleSquare3} coord={this.props.region['1,3']}/>
        <Square value={this.handleSquare4} coord={this.props.region['2,1']}/>
        <Square value={this.handleSquare5} coord={this.props.region['2,2']}/>
        <Square value={this.handleSquare6} coord={this.props.region['2,3']}/>
        <Square value={this.handleSquare7} coord={this.props.region['3,1']}/>
        <Square value={this.handleSquare8} coord={this.props.region['3,2']}/>
        <Square value={this.handleSquare9} coord={this.props.region['3,3']}/>
      </div>
    );
  }
}
//button components
function BackBtn(props){
  return (
    <button type="button" className=" btn1 btn btn-primary" onClick={props.onClick}>Close</button>
  );
}
//this is the board that the regions are rendered on.
class Board extends React.Component{
  constructor(props){
    super(props);
    this.handleRegion1 = this.handleRegion1.bind(this);
    this.handleRegion2 = this.handleRegion2.bind(this);
    this.handleRegion3 = this.handleRegion3.bind(this);
    this.handleRegion4 = this.handleRegion4.bind(this);
    this.handleRegion5= this.handleRegion5.bind(this);
    this.handleRegion6 = this.handleRegion6.bind(this);
    this.handleRegion7 = this.handleRegion7.bind(this);
    this.handleRegion8 = this.handleRegion8.bind(this);
    this.handleRegion9 = this.handleRegion9.bind(this);
    //this.handleTotal = this.handleTotal.bind(this);
    this.checkSumOfRegion = this.checkSumOfRegion.bind(this);
    this.state = {
      total:''
    };
  }

componentDidMount(){
  console.log(this.props.board[0]);
}
  handleRegion1(value){
    //this.props.board[0]['1,1'] =value;
    this.setState({
      '1,1':(value)
    });
    this.checkSumOfRegion('1,1');
  }
  handleRegion2(value){
    //this.props.board[0]['1,2'] =value;
    this.setState({
      '1,2':(value)
    });
  }
  handleRegion3(value){
    //this.props.board[0]['1,3'] =value;
    this.setState({
      '1,3':(value)

    });
  }
  handleRegion4(value){
    this.setState({
      '2,1':(value)

    });
  }
  handleRegion5(value){
    this.setState({
      '2,2':(value)

    });
  }
  handleRegion6(value){
    this.setState({
      '2,3':(value)

    });
  }
  handleRegion7(value){
    this.setState({
      '3,1':(value)

    });
  }
  handleRegion8(value){
    this.setState({
      '3,2':(value)

    });
  }
  handleRegion9(value){
    this.setState({
      '3,3':(value)

    });
  }
  // handleTotal(total){
  //   this.setState({total:total});
  // }
  //once again an attempt to calulte total of the game.
  checkSumOfRegion(region){
    const arrValues = [];
    const regions =[];
    regions.push(this.state[`${region}`]);
    let total = 0;
    for (let key in regions){
      arrValues.push(regions[key]);
    }
    if (arrValues.length>0){
      total = arrValues.reduce((a,b) => a+b);
    }
    //this.props.TotalValue({total:total});
    this.setState({total:total});
    return total;
  }
  // checkSumOfRegion(){
  //   const coord = this.state;
  //   let arrValuesregion1 =[];
  //   const region1 = ((this.state || {})['1,1'] || {})['1,1'];
  //   for (let key in region1) {
  //     arrValuesregion1.push(region1[key])
  //   }
  //   // for (let i = 0; i < array.length; i++) {
  //   //   array[i]
  //   // }
  //   console.log(arrValuesregion1);
  // }
  //values are bing passed down to the region and then to the squares usding the this.props objects
  render(){
    console.log(this.props.board);
    return(<div>
      <div className="board background">
        <Region
          value={this.handleRegion1}
          TotalValue={this.handleTotal}
          region={this.props.board[0]}/>
        <Region value={this.handleRegion2} region={this.props.board[1]}/>
        <Region value={this.handleRegion3} region={this.props.board[2]}/>
        <Region value={this.handleRegion4} region={this.props.board[3]}/>
        <Region value={this.handleRegion5} region={this.props.board[4]}/>
        <Region value={this.handleRegion6} region={this.props.board[5]}/>
        <Region value={this.handleRegion7} region={this.props.board[6]}/>
        <Region value={this.handleRegion8} region={this.props.board[7]}/>
        <Region value={this.handleRegion9} region={this.props.board[8]}/>
      </div>
      </div>
    );
  }
}
//this is a timer which goes while the user is attempting a puzzle. it makes up the users score where the lowest score is best
function score({timer}){

  return (<div><h4>Score: {parseFloat((timer.tick * timer.delay/100)).toFixed(0)}</h4></div>);
}
const Timer = timer(1)(score);
//this is the score board component where the different high scores are recorded and the and the users score is calculated
function ScoreBoard(props){
  let comp;
  if(props.current === 'gameE'){
    comp=(<div>

      <ul>
        <li>1: Jim: 700</li>
        <li>2: Rebbeca: 1030</li>
        <li>3: Harry: 1112</li>
        <li>4: Kelly: 1420</li>
        <li>5: Fred: 1590</li>
        <li>6: Nina: 1690</li>
      </ul>
      </div>
    );
  }
  else if(props.current === 'gameM'){
    comp=(<div>
      <ul>
        <li>1: Jill: 1020</li>
        <li>2: Jack: 1030</li>
        <li>3: Harry: 1120</li>
        <li>4: Kelly: 1230</li>
        <li>5: Fred: 1560</li>
        <li>6: Nina: 1590</li>
      </ul>
      </div>
    );
  }
  else if(props.current === 'gameH'){
    comp=(<div>
      <ul>
        <li>1: Samantha: 1401</li>
        <li>2: Jack: 1520</li>
        <li>3: Fred: 1600</li>
        <li>4: Kelly: 1730</li>
        <li>5: Rebecca: 1960</li>
        <li>6: Nina: 2090</li>
      </ul>
      </div>
    );
  }
  else if(props.current ==='gameRando'){
    comp=(<h4>This is a work in progress, Duplicate numbers still appear in rows,columns and regions</h4>);
  }
  return(
    <div className=' row info'>
      <div className='col-12'>
        <h3>Score Board</h3>
        <hr/>
          <Timer/>
        <h4>Leader Board: </h4>

        {comp}
      </div>
    </div>
  );

}
function SaveBtn(props){
  return (
    <button type="button" className=" btn1 btn btn-primary" onClick={props.onClick}>Save</button>
  );
}
function CheckBtn(props){
  return (
    <button type="button" className=" btn1 btn btn-primary" onClick={props.onClick}>Check</button>
  );
}
//main parent class that conditional rendering happens
class App extends React.Component{
  constructor(props){
    super(props)
    this.board1 =this.board1.bind(this);
    this.board2 =this.board2.bind(this);
    this.board3 =this.board3.bind(this);
    this.boardRando =this.boardRando.bind(this);
    this.check = this.check.bind(this);
    this.save = this.save.bind(this);
    this.state={
      current:'home',
      values:[]
    };
  }

  board1(){
    console.log(board);
    this.setState({current:'gameE', values:getValues(board)});

  }
  board2(){
    console.log(board);
    this.setState({current:'gameM', values:getValues(board2)});
  }
  board3(){
    console.log(board);
    this.setState({current:'gameH', values:getValues(board3)});
  }
  // tried to generate random numbers for the game. did not work well but attempts to remove any duplicates in a region
  boardRando(){
  //   console.log(board);
  this.setState({current:'gameRando', values:getValues(randoBoard)});
  //   let region1 =[]
  //   for (var i = 0; i < 9; i++) {
  //     region1.push(Math.floor(Math.random()*9)+1);
  //   }
  // console.log(region1);

    let values = getValues(randoBoard);
    console.log(values);
    for(let x = 0; x<= (81);x++){

      let rando = Math.floor(Math.random()*9)+1;
      let randoRow = Math.floor(Math.random()*3);
      let randoCol = Math.floor(Math.random()*3);
      let randoRegion = Math.floor(Math.random()*9)+1;
      let key = randoRow +','+randoCol;
      (((randoBoard || {})[randoRegion]||{})[key] = rando);
  }
  let keys =[];
  let arr=getValues(randoBoard);
  let value =[];
  console.log(randoBoard);
  for(let key in arr[0]){
    values.push(arr[0][key]);
    keys.push(key);
    console.log(key);
  //}
}
let region1=[];
let key1 =[];
let region2 =[];
let key2 =[];
let region3 =[];
let key3 =[];
let region4 =[];
let key4 =[];
let region5 =[];
let key5 =[];
let region6 =[];
let key6 =[];
let region7 =[];
let key7 =[];
let region8 =[];
let key8 =[];
let region9 =[];
let key9 =[];
let conArr =[];

//removes data from the objects and puts them in an array
for (let i = 0; i < 9; i++) {
  for (let x = 0; x < 9; x++) {
      if(((randoBoard || {})[i+1] || {})[keys[x]] != ''){
        if (i === 0){
          region1.push(((randoBoard || {})[i+1] || {})[keys[x]]);
          key1.push(keys[x]);
    }
    else if (i === 1){
      region2.push(((randoBoard || {})[i+1] || {})[keys[x]]);
      key2.push(keys[x]);
    }
    else if (i === 2){
      region3.push(((randoBoard || {})[i+1] || {})[keys[x]]);
      key3.push(keys[x]);
    }
    else if (i === 3){
      region4.push(((randoBoard || {})[i+1] || {})[keys[x]]);
      key4.push(keys[x]);
    }
    else if (i === 4){
      region5.push(((randoBoard || {})[i+1] || {})[keys[x]]);
      key5.push(keys[x]);
    }
    else if (i === 5){
      region6.push(((randoBoard || {})[i+1] || {})[keys[x]]);
      key6.push(keys[x]);
    }
    else if (i === 6){
      region7.push(((randoBoard || {})[i+1] || {})[keys[x]]);
      key7.push(keys[x]);
    }
    else if (i === 7){
      region8.push(((randoBoard || {})[i+1] || {})[keys[x]]);
      key8.push(keys[x]);
    }
    else if (i === 8){
      region9.push(((randoBoard || {})[i+1] || {})[keys[x]]);
      key9.push(keys[x]);
    }
  //}
  }
}
console.log(key9);
//puts all the different arrays into one array that has nested arrays
// let randoBoardArr = conArr.concat([region1],[region2],[region3],[region4],[region5],[region6],[region7],[region8],[region9]);
// console.log(randoBoardArr);
// console.log(randoBoard);
// //sorts through the sorted array and sets any duplicates to a blank strinng. this elemenates duplicats in the blocks
// for(let i =0;i < 9;i++){
//   for (let x = 0; x < 9; x++) {
//     if (randoBoardArr[i][x] === randoBoardArr[i][x+1] || randoBoardArr[i][x+1] === randoBoardArr[i][x+2] ){
//       ((randoBoard || {})[i+1] || {})[keys[x+1]] = '';
//       //console.log(((randoBoard || {})[i+1] || {})[keys[x+1]]);
//       //console.log('true the number is: ' +((randoBoard || {})[i+1] || {})[keys[x]]);
//     }
//     else{
//       //console.log('false the Number: '+ ((randoBoard || {})[i+1] || {})[keys[x]]);
//       //console.log(((randoBoard || {})[i+1] || {})[keys[x]]);
//   }
//
//   }
// }


console.log(randoBoard);
}

console.log(region1);
console.log(uniq(region1));
let x = 0;
let region1D = (arrDiff(region1)|| []);
for (let i = 0; i < region1.length; i++) {
  console.log(((randoBoard || {})[1] || {})[key1[i]]);
  if (region1D.length=== 0){
    break;
  }
  //for(let x =0; x<uniq(region1).length;x++){
  if (region1[i] == (region1D || [])[i]){
  ((randoBoard || {})[1] || {})[key1[i]] = '';
  region1D.splice(i,i);
  console.log('it worked');
  if(region1D.length === 0){
    break;
  }

  }

//}
}
let region2D = arrDiff(region2);;
console.log(region2D);
for (let i = 0; i < region2.length; i++) {
  if (region2D.length=== 0){
    break;
  }
  //for(let x =0; x<uniq(region1).length;x++){
  if (region2[i] === region2D[i]){
  ((randoBoard || {})[2] || {})[key2[i]] = '';
  region2D.splice(i,i);
  console.log('it worked' + key2[i]);
  if(region2D.length === 0){
    break;
  }

  }
//}
}
let region3D = arrDiff(region3);
for (let i = 0; i < region3.length; i++) {
  if (region3D.length=== 0){
    break;
  }
  console.log(region3D + ' ' + region3);
  //for(let x =0; x<uniq(region1).length;x++){
  if (region3[i] == region3D[i]){
  ((randoBoard || {})[3] || {})[key3[i]] = '';
  region3D.splice(i,i);
  console.log('it worked');
  if(region3D.length === 0){
    break;
  }

  }
//}
}
let region4D = arrDiff(region4);
for (let i = 0; i < region4.length; i++) {
  if (region4D.length=== 0){
    break;
  }
  //for(let x =0; x<uniq(region1).length;x++){
  if (region4[i] == region4D[i]){
  ((randoBoard || {})[4] || {})[key4[i]] = '';
  region4D.splice(i,i);
  console.log('it worked');
  if(region4D.length === 0){
    break;
  }

  }
//}
}
let region5D = arrDiff(region5);
for (let i = 0; i < region5.length; i++) {
  if (region5D.length=== 0){
    break;
  }
  //for(let x =0; x<uniq(region1).length;x++){
  if (region5[i] == region5D[i]){
  ((randoBoard || {})[5] || {})[key5[i]] = '';
  region5D.splice(i,i);
  console.log('it worked');
  if(region5D.length === 0){
    break;
  }

  }
//}
}
let region6D = arrDiff(region6);
for (let i = 0; i < region6.length; i++) {
  if (region6D.length=== 0){
    break;
  }
  //for(let x =0; x<uniq(region1).length;x++){
  if (region6[i] == region6D[i]){
  ((randoBoard || {})[6] || {})[key6[i]] = '';
  region6D.splice(i,i);
  console.log('it worked');
  if(region6D.length === 0){
    break;
  }

  }
//}
}
let region7D = arrDiff(region7);
for (let i = 0; i < region1.length; i++) {
  if (region7D.length=== 0){
    break;
  }
  //for(let x =0; x<uniq(region1).length;x++){
  if (region7[i] == region7D[i]){
  ((randoBoard || {})[7] || {})[key7[i]] = '';
  region7D.splice(i,i);
  console.log('it worked');
  if(region7D.length === 0){
    break;
  }

  }
//}
}
let region8D = arrDiff(region8);
for (let i = 0; i < region8.length; i++) {
  if (region8D.length=== 0){
    break;
  }
  //for(let x =0; x<uniq(region1).length;x++){
  if (region8[i] == region8D[i]){
  ((randoBoard || {})[8] || {})[key8[i]] = '';
  region8D.splice(i,i);
  console.log('it worked');
  if(region8D.length === 0){
    break;
  }

  }
//}
}
let region9D = arrDiff(region9);
for (let i = 0; i < region9.length; i++) {
  if (region9D.length=== 0){
    break;
  }
  //for(let x =0; x<uniq(region1).length;x++){
  if (region9[i] == region9D[i]){
  ((randoBoard || {})[9] || {})[key9[i]] = '';
  region9D.splice(i,i);
  console.log('it worked');
  if(region9D.length === 0){
    break;
  }

  }
}

console.log(arrDiff(region1));

  console.log(this.state);
  }
//this method attempted to save the game state in a file inorder for it to be called later.
  save(){

    try{
      writeFile('log.txt', (this.state.values).toString());
  }catch{
    console.log('did not work');
  }

  }
  //this function checks for a winner.
  check(){
    if (this.state.values === solution1){
      alert('Well done on completion');
    }else{
      alert('not completed yet');
    }

  }
  render(){
    console.log(this.state);
    let comp;
    if(this.state.current ==='gameE' || this.state.current ==='gameM' || this.state.current ==='gameH' || this.state.current==='gameRando'){
      comp =(
        <div >
        <div className='row'>
        <div ClassName='info col-5'><h3>
          <ScoreBoard current={this.state.current}/>
        </h3></div>
          <div className='col-7'>
            <Board board={this.state.values}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12' align="center">
            <BackBtn onClick={()=>{this.setState({current:'home',value:''})}}/>
            <SaveBtn onClick={this.save}/>
            <CheckBtn onClick={this.check}/>
          </div>
        </div>
        </div>
      );
    }
    else{

    }

    return(
      <div className="container">
      <div className="row">
      <div className="col-12">
        <h1>Individual Project: Sodoku</h1>
          <div>
          <div className='row'>
          <div className="col-2">
          <button type="button" className=" btn1 btn btn-primary" onClick={this.board1}>Play: Easy</button>
          </div>
          <div className="col-2">
          <button type="button" className=" btn1 btn btn-primary" onClick={this.board2}>Play: Medium</button>
          </div>
          <div className="col-2">
          <button type="button" className=" btn1 btn btn-primary" onClick={this.board3}>Play: Hard</button>
          </div>
          <div className="col-2">
          <button type="button" className=" btn1 btn btn-primary" onClick={this.boardRando}>Random Game</button>
          </div>
          {comp}
          </div>

          </div>
          </div>
          </div>
      </div>
    );

  }
}
ReactDOM.render(<App />, document.getElementById('root'));
//these are extra function used to manipulate arrays, they have mostly been copied from stack overFlow in order to help with the generating of a random game
function getValues(object,arr){// this one is not from stack overflow but returns the different regions in an array from 0 -8
  let values = [];
  //let x =[];
  let populatedBoard
  for (let key in object) {
    //for(let key2 in object[key]){
    values.push(object[key])

  //}
  }
//  populatedBoard  = x => arr.filter((a)=>)

  return values;
}
function uniq(a){
  var seen ={};

  return a.filter(item=>seen.hasOwnProperty(item) ? false:(seen[item]=true));

}
function arrDiff (a1) {

  const count = a1 => a1.reduce((a, b) => Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

  const duplicates = dict => Object.keys(dict).filter((a) => dict[a] > 1)
  return duplicates(count(a1));

}
