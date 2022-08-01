import './App.css';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {
    const [expense , setExpense] = useState({'Income': [],'Grocery': [],'Veggies':[] , 'Travelling':[] , 'Miscellaneous':[]})
    const [cat , setCat] = useState('')
    const [tot , setTot] = useState({'Income': 0,'Grocery': 0,'Veggies':0 , 'Travelling':0 , 'Miscellaneous':0})
    const [edit , setEdit] = useState([])
    const [btnName , setBtnName] = useState('Add')
    
   
    useEffect(()=>{
      let temp = {'Income': 0,'Grocery': 0,'Veggies':0 , 'Travelling':0 , 'Miscellaneous':0}
      for(let i=0;i<expense['Income'].length;i++){
        temp['Income']+=Number(expense['Income'][i])
      }
      for(let i=0;i<expense['Grocery'].length;i++){
        temp['Grocery']+=Number(expense['Grocery'][i])
      }
      for(let i=0;i<expense['Veggies'].length;i++){
        temp['Veggies']+=Number(expense['Veggies'][i])
      }
      for(let i=0;i<expense['Travelling'].length;i++){
        temp['Travelling']+=Number(expense['Travelling'][i])
      }
      for(let i=0;i<expense['Miscellaneous'].length;i++){
        temp['Miscellaneous']+=Number(expense['Miscellaneous'][i])
      }

      setTot({...temp})
    },[expense])

    const addExp = (e)=>{
      e.preventDefault()
      let txt = document.getElementById('txt').value
      let temp = {...expense}
      if(btnName==='Add'){
        temp[cat].push(txt)
        setExpense(temp)
      }
      else{
        console.log(temp[edit[1]][edit[0]])
        temp[edit[1]][edit[0]] = txt;
        setExpense({...temp})
        setBtnName('Add')
        setCat('')
      }
        
    }

    const edit_task = (e)=>{
      let ind = e.target.id
      let category = e.target.closest('div').className
      document.getElementById('txt').value = expense[category][ind]
      setEdit([ind, category])
      setCat(category)
      setBtnName('Update')
    }
    const delete_task = (e)=>{
      let ind = e.target.id
      let category = e.target.closest('div').className
      let temp = {...expense}
      temp[category].splice(ind,1)
      setExpense({...temp})
    }
    
    
    
    
    

  return (
    
    <div className="App">
        <form onSubmit={addExp}>
        <Paper id='div'elevation={10}>
            <TextField id='txt' variant="outlined" type='number' required></TextField>
            <FormControl >
                  <InputLabel id='category'>Expenses</InputLabel>
                  <Select sx={{ minWidth: 110 }} value={cat} onChange={(e)=>{setCat(e.target.value)}} autoWidth labelId='category' id='cat' label='Category' required>
                    <MenuItem value='Income'>Income</MenuItem>
                    <MenuItem value='Grocery'>Grocery</MenuItem>
                    <MenuItem value='Veggies'>Veggies</MenuItem>
                    <MenuItem value='Travelling'>Travelling</MenuItem>
                    <MenuItem value='Miscellaneous'>Miscellaneous</MenuItem>
                  </Select>
            </FormControl>
            <Button variant='contained' type="submit">{btnName}</Button>
        </Paper>
        </form>
        <h2 className='h'>Total Balance : ₹{Number(tot['Income'])-(Number(tot['Grocery'])+Number(tot['Veggies'])+Number(tot['Travelling'])+Number(tot['Miscellaneous']))}</h2>
        <div id='container'>
        <Paper id="I">
          <h1>Total Income: ₹{tot['Income']}</h1>
          {
            expense['Income'].map((item , i)=>
              <div className='Income' key={i}>
                <p>{item}<span><Button style={{color:'green'}}   id={i} onClick={edit_task} >Edit</Button><Button style={{color:'red'}} onClick={delete_task} id={i}>Delete</Button></span></p>
              </div>
            )
          }
        </Paper>  
        <Paper id="G">
          <h1>Grocery Total: ₹{tot['Grocery']}</h1>
          {
            expense['Grocery'].map((item , i)=>
              <div className='Grocery' key={i}>
                <p>{item}<span><Button style={{color:'green'}}   id={i} onClick={edit_task} >Edit</Button><Button style={{color:'red'}} onClick={delete_task} id={i}>Delete</Button></span></p>
              </div>
            )
          }
        </Paper>
        <Paper id='V'>
        <h1>Veggies Total: ₹{tot['Veggies']}</h1>
          {
            expense['Veggies'].map((item , i)=>
              <div className='Veggies' key={i}>
                <p>{item}<span><Button style={{color:'green'}} id={i} onClick={edit_task} >Edit</Button><Button style={{color:'red'}} onClick={delete_task} id={i}>Delete</Button></span></p>
              </div>
            )
          }
        </Paper>
        <Paper id='T'>
        <h1>Travelling Total: ₹{tot['Travelling']}</h1>
          {
            expense['Travelling'].map((item , i)=>
              <div className='Travelling' key={i}>
                <p>{item}<span><Button style={{color:'green'}} id={i} onClick={edit_task} >Edit</Button><Button style={{color:'red'}} onClick={delete_task} id={i}>Delete</Button></span></p>
              </div>
            )
          }
        </Paper>
        <Paper id='M'>
        <h1>Miscellaneous Total: ₹{tot['Miscellaneous']}</h1>
          {
            expense['Miscellaneous'].map((item , i)=>
              <div key={i} className='Miscellaneous'>
                <p>{item}<span><Button style={{color:'green'}} id={i} onClick={edit_task} >Edit</Button><Button style={{color:'red'}} onClick={delete_task} id={i}>Delete</Button></span></p>
              </div>
            )
          }
        </Paper>
        </div>
    </div>
  );
}

export default App;
