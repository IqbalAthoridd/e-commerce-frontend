import React,{useEffect} from 'react';
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
import getCartAction from '../../redux/action/getCart'
import { useDispatch, useSelector } from 'react-redux'

const CustomCheckBox = withStyles({
  root: {
    color:"#3285A8",
    '&$checked': {
      color: "#3285A8",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
function Cart() {
  const cart = cartStyle();
  const dispatch = useDispatch()
  const token = localStorage.getItem("token") || ""
  const data = useSelector(state=>state.getCart)

  const [state, setState] = React.useState({
    checked: false});

    useEffect(()=>{
      dispatch(getCartAction.getCart(token))
    },[])

  const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

  return (
    <>
      <Grid item lg={12} xs={12} md={12} ms={12}>
        <div className={styles.myBag}>
          <span><h2>My Bag</h2></span>
        </div>
      </Grid>
      <Grid item lg={7} xs={12} md={8} ms={4}>
        <form onSubmit>
          <Grid item lg={12}>
            <Paper
              elevation={3}
              className={`${styles.display} ${styles.cartSpacing}`}
            >
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={<CustomCheckBox name="gilad" />}
                    label="Select all Items (2 items selected)"
                  />
                </FormGroup>
              </FormControl>
              <FormControl component="fieldset">
                <FormGroup className={styles.btnDelete}>
                  <Button className={cart.btnDel}>Delete</Button>
                </FormGroup>
              </FormControl>
            </Paper>
          </Grid>
          
            {data.data.length? data.data.map(data=>(
              <>
              <Grid item lg={12}>
              <Paper
                elevation={3}
                className={`${styles.display2} ${styles.cartSpacing2}`}
              >
                <FormControl component="fieldset">
                  <FormGroup className={cart.diplay}>
                    <FormControlLabel
                      control={<CustomCheckBox name="checked" checked={state.checked} onChange={handleChange}  />}
                      className={`${styles.checkboxPos}`}
                    />
                  </FormGroup>
                </FormControl>
    
                <div className={`${styles.product}`}>
                  <div className={`${styles.cartImage}`}>
                    <div className={`${styles.cartImage2}`}>
                      <img className={`${styles.imageSize}`} src={`http://localhost:8080/${data.url}`}></img>
                    </div>
                  </div>
                  
                    <div className={styles.brandName}>
                      <div>
                      <span>
                        {data.name}
                      </span>
                      </div>
                      <div>
                        <span>
                          {data.category}
                        </span>
                      </div>
                    </div>
    
                    <div className={styles.Quantity}>
                      <div className={styles.btnQuantity}>
                      <div className={styles.btnMin}>
                      <IconButton className={cart.btnMin}>
                          <RemoveIcon  className={cart.iconMin}/>
                        </IconButton>
                      </div>
                      <div className={styles.btnMin}>
            <span>{data.total}</span>
                      </div>
                      <div>
                      <IconButton className={cart.btnPlus}>
                          <AddIcon className={cart.iconPlus}/>
                        </IconButton>
                      </div>
                      </div>
                    </div>
                    <div >
            <span>Rp {data.subTotal}</span>
                    </div>
                    </div>
                    <div className={styles.container2}>
                    </div>
              </Paper>
              </Grid>  
            </>
            )):""}
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
              <span>$40.0</span>
            </div>
            </div>
          </div>
          <div>
            <Button className={cart.btnBuy} fullWidth="true">Buy</Button>
          </div>
        </Paper>
      </Grid>
    </>
  );
}

export default Cart;
