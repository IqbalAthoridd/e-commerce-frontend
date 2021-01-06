import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import { Button, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './cart.module.css';
import Box from '@material-ui/core/Box';
import baju from '../../assets/img/produk.jpg';
import { cartStyle } from './cartStyles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import getCartAction from '../../redux/action/getCart';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
const { REACT_APP_BACKEND_URL } = process.env;


const CustomCheckBox = withStyles({
  root: {
    color: '#3285A8',
    '&$checked': {
      color: '#3285A8',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
function Cart() {
  const history = useHistory()
  const cart = cartStyle();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token') || '';
  const data = useSelector((state) => state.getCart);
  const [list, setList] = useState([]);
  const [all,setAll] = useState(false)
  const [item,setItem]= useState([])
  const [itemList,setItemList] = useState([])
  const [summary,setSummary] = useState(0)
  const arr = [1,2,3,4,5]


  const [state, setState] = React.useState({
    checked: false,
  });

  useEffect(() => {
    const getCart = async () => {
      const { action } = await dispatch(getCartAction.getCart(token));

      setList(action.payload.data.data);
    };
    getCart();
  }, []);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const countIncrement = (i) => {
    list[i] = {
      ...list[i],
      total: list[i].total + 1,
      subTotal: list[i].price + list[i].subTotal,
    };
    setList([...list]);
  };

  const countDecrement = (i) => {
    list[i] = {
      ...list[i],
      total: list[i].total - 1,
      subTotal: list[i].subTotal - list[i].price,
    };
    setList([...list]);
  };

  const handleCheckBox = (event,i) => {
    setItem({...item, [event.target.name]: event.target.checked} );
    if(event.target.checked){
      setItemList([...itemList,list[i]])
      setSummary(summary+list[i].subTotal)
    } else {
      const newArray = itemList.filter(item=>{
        return item.name !== event.target.name
      })
      setItemList(newArray)
      setSummary(summary-list[i].subTotal)
    }
  }

  const allItems=(event)=>{
    setAll(event.target.checked)
    if(all){
      setItemList([])
    } else{
      setItemList(list)
    }
    
  }

  const checkOut = () => {
    history.push('/checkout',{itemList,summary})
  }

  return (
    <>
      {console.log("askdasd",itemList)}
      <Grid item lg={12} xs={12} md={12} ms={12}>
        {console.log(list)}
        <div className={styles.myBag}>
          <span>
            <h2>My Bagg</h2>
          </span>
        </div>
      </Grid>
      <Grid item lg={7} xs={12} md={8} ms={4}>
        <form onSubmit={handleSubmit}>
          <Grid item lg={12}>
            
            <Paper
              elevation={3}
              className={`${styles.display} ${styles.cartSpacing}`}
            >
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={<CustomCheckBox onChange={allItems} name={data.id} value={all} name="gilad" />}
                    label={`Select all Items  ${itemList.length?`(${itemList.length} items selected)`:''}`}
                  />
                </FormGroup>
              </FormControl>
              <FormControl component="fieldset">
                <FormGroup className={styles.btnDelete}>
                  <Button className={cart.btnDel} type="submit">
                    Delete
                  </Button>
                </FormGroup>
              </FormControl>
            </Paper>
          </Grid>

          <Grid item lg={12}>
          {data.isLoading&& arr.map(item=>(
            <div style={{marginBottom:20}}>
             <Skeleton variant="rect" style={{borderRadius:5}} animation='wave' height={140} />
             </div>
          )) }
          
          {list.length
            ? list.map((data, index) => (
                <>
                    <Paper
                      elevation={3}
                      className={`${styles.display2} ${styles.cartSpacing2}`}
                    >
                      <FormControl component="fieldset">
                        <FormGroup className={cart.diplay}>
                          <FormControlLabel
                            control={<CustomCheckBox onChange={(e)=>handleCheckBox(e,index)} name={`${data.name}`} value={false}/>}
                            className={`${styles.checkboxPos}`}
                          />
                        </FormGroup>
                      </FormControl>

                      <div className={`${styles.product}`}>
                        <div className={`${styles.cartImage}`}>
                          <div className={`${styles.cartImage2}`}>
                            <img
                              className={`${styles.imageSize}`}
                              src={`${REACT_APP_BACKEND_URL}${data.url}`}
                            ></img>
                          </div>
                        </div>

                        <div className={styles.brandName}>
                          <div>
                            <span>{data.name}</span>
                          </div>
                          <div>
                            <span>{data.category}</span>
                          </div>
                        </div>

                        <div className={styles.Quantity}>
                          <div className={styles.btnQuantity}>
                            <div className={styles.btnMin}>
                              <IconButton
                                disabled={data.total < 2 ? true : false}
                                onClick={() => countDecrement(index)}
                                className={cart.btnMin}
                              >
                                <RemoveIcon className={cart.iconMin} />
                              </IconButton>
                            </div>
                            <div className={styles.btnMin}>
                              <span>{data.total}</span>
                            </div>
                            <div>
                              <IconButton
                                onClick={() => countIncrement(index)}
                                className={cart.btnPlus}
                              >
                                <AddIcon className={cart.iconPlus} />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                        <div>
                          <span>Rp {data.subTotal}</span>
                        </div>
                      </div>
                      <div className={styles.container2}></div>
                    </Paper>
                </>
              ))
            : ""}
            </Grid>
        </form>
      </Grid>
      <Grid item lg={4} xs={12} md={4}>
        <Paper elevation={3} className={styles.cartSpacing3}>
          <div className={styles.sumSpaccing}>
            <span>Shopping summary</span>
          </div>
          <div>
            <div className={styles.totalDisplay}>
              <div className={styles.sumSpaccing}>
                <span>Total Price</span>
              </div>
              <div>
                <span>Rp.{summary}</span>
              </div>
            </div>
          </div>
          <div>
            <Button onClick={checkOut} className={cart.btnBuy} fullWidth="true">
              Buy
            </Button>
          </div>
        </Paper>
      </Grid>
    </>
  );
}

export default Cart;
