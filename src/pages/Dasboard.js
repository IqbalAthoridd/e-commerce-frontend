import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, Button } from '@material-ui/core';
import { dasboardStyle } from './dasboadStyles';
import InputTextNew from '../components/Form/InputTextNew';
import Pagination from '@material-ui/lab/Pagination';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useSelector, useDispatch } from 'react-redux';
import itemsAction from '../redux/action/items';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import NavigationBar from '../components/Navbar/NavigationBar';
import { useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#DB3022',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Dasboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const classes = useStyles();
  const styles = dasboardStyle();
  const token = useSelector((state) => state.auth.token);
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = useState({
    limit: 5,
    page: 1,
    searchFilter: 'name',
    search: '',
    sortFilter: 'create_at',
    sort: 'DESC',
    isSubmit: false,
  });

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  useEffect(() => {
    dispatch(
      itemsAction.getItems(
        token,
        filter.limit,
        filter.page,
        filter.searchFilter,
        filter.search,
        filter.sortFilter,
        filter.sort,
      ),
    );
  }, [
    filter.page,
    filter.limit,
    filter.sort,
    filter.sortFilter,
    filter.isSubmit,
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setFilter({
      ...filter,
      [name]: event.target.value,
    });
  };

  const handlePagination = (e, page) => {
    setFilter({ ...filter, page });
  };

  const handleSubmut = (e) => {
    e.preventDefault();
    setFilter({ ...filter, isSubmit: true });
    dispatch(
      itemsAction.getItems(
        token,
        filter.limit,
        filter.page,
        filter.searchFilter,
        filter.search,
        filter.sortFilter,
        filter.sort,
      ),
    );
  };

  return (
    <>
      <NavigationBar />

      <Grid className={styles.container} container>
        {console.log("PPPPP",token)}
        <Grid item lg={12} md={12} xs={12} sm={12}>
          <div
            style={{
              marginBottom: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <form onSubmit={handleSubmut}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <InputTextNew
                      name="search"
                      value={filter.search}
                      onChange={handleChange}
                      placeholder="Search"
                    />
                  </div>
                  <div>
                    <Button
                      type="submut"
                      className={styles.btnSearch}
                      variant="contained"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </form>
              <div className={styles.btnAddWrapper}>
                <Button className={styles.btnProduct} variant="outlined">
                  Add Product
                </Button>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div style={{ marginRight: 10 }}>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="age-native-simple">Search by</InputLabel>
                  <Select
                    native
                    value={filter.searchFilter}
                    onChange={handleChange}
                    inputProps={{
                      name: 'searchFilter',
                      // id: 'age-native-simple',
                    }}
                  >
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                    <option value="price">Price</option>
                    <option value="description">Description</option>
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginRight: 10 }}>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="age-native-simple">Sort</InputLabel>
                  <Select
                    native
                    value={filter.sortFilter}
                    onChange={handleChange}
                    inputProps={{
                      name: 'sortFilter',
                      // id: 'age-native-simple',
                    }}
                  >
                    <option value="create_at">New</option>
                    <option value="update_at">Update</option>
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginRight: 10 }}>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="age-native-simple">Sort to</InputLabel>
                  <Select
                    native
                    value={filter.sort}
                    onChange={handleChange}
                    inputProps={{
                      name: 'sort',
                      // id: 'age-native-simple',
                    }}
                  >
                    <option value="ASC">Asc</option>
                    <option value="DESC">Desc</option>
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginRight: 10 }}>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="age-native-simple">Limit</InputLabel>
                  <Select
                    native
                    value={filter.limit}
                    onChange={handleChange}
                    inputProps={{
                      name: 'limit',
                      id: 'age-native-simple',
                    }}
                  >
                    {/* <option aria-label="None" value="" /> */}
                    <option value={1}> 1 </option>
                    <option value={3}> 3 </option>
                    <option value={5}> 5 </option>
                    <option value={10}> 10 </option>
                    <option value={15}> 15 </option>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </Grid>

        <Grid lg={12} md={12} xs={12} sm={12} item>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className={styles.tableHeader} align="right">
                    No
                  </StyledTableCell>
                  <StyledTableCell className={styles.tableHeader}>
                    Name
                  </StyledTableCell>
                  <StyledTableCell
                    className={styles.tableHeader}
                    align="center"
                  >
                    Category
                  </StyledTableCell>
                  <StyledTableCell
                    className={styles.tableHeader}
                    align="center"
                  >
                    Price(Rp)
                  </StyledTableCell>
                  <StyledTableCell
                    className={styles.tableHeader}
                    align="center"
                  >
                    Description
                  </StyledTableCell>
                  <StyledTableCell
                    className={styles.tableHeader}
                    align="center"
                  >
                    Condition
                  </StyledTableCell>
                  <StyledTableCell
                    className={styles.tableHeader}
                    align="center"
                  >
                    Action
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.data !== undefined
                  ? items.data.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.id}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.category}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.price}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.description}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.condition}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <div
                            style={{ display: 'flex', flexDirection: 'row' }}
                          >
                            <div>
                              <Button variant="contained">UP</Button>
                            </div>
                            <div>
                              <Button variant="contained">Del</Button>
                            </div>
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item>
          <div className={styles.paginationWrapper}>
            <div>
              <Pagination
                onChange={handlePagination}
                count={items.pageInfo !== items.pageInfo.pages}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
