import { Box, Form } from './searchGeographicDist.style';
import { Typography, TextField, MenuItem, Button } from '@material-ui/core';
import { useFormik } from 'formik';

interface Props {
  onHandleSubmit: (values: any) => void;
}

const SearchGeographicDist = ({ onHandleSubmit }: Props) => {
  const formik = useFormik({
    initialValues: {
      specie: '',
      state: '',
      city: ''
    },
    onSubmit: (values) => {
      onHandleSubmit(values);
    }
  });

  return (
    <Box>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        align="center"
      >
        Pesquise por
      </Typography>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          value={formik.values.specie}
          onChange={formik.handleChange}
          select
          name="specie"
          id="specie"
          label="Espécie"
          variant="outlined"
        >
          <MenuItem key="1" value="capivara">
            Capivara (<i>Hydrochoerus hydrochaeris</i>)
          </MenuItem>
          <MenuItem key="2" value="garca-branca-grande">
            Garça-branca-grande (<i>Ardea alba</i>)
          </MenuItem>
          <MenuItem key="3" value="bem-te-vi">
            Bem-te-vi (<i>Pitangus sulphuratus</i>)
          </MenuItem>
          <MenuItem key="4" value="tuim">
            Tuim (<i>Forpus xanthopterygius</i>)
          </MenuItem>
          <MenuItem key="5" value="quati">
            Quati (<i>Nasua nasua</i>)
          </MenuItem>
          <MenuItem key="6" value="soco-dorminhoco">
            Socó-dorminhoco (<i>Nycticorax nycticorax</i>)
          </MenuItem>
          <MenuItem key="7" value="tatu-galinha">
            Tatu-galinha (<i>Dasypus novemcinctus</i>)
          </MenuItem>
        </TextField>
        <TextField
          value={formik.values.state}
          onChange={formik.handleChange}
          select
          name="state"
          id="state"
          label="Estado"
          variant="outlined"
        >
          <MenuItem key="1" value="SP">
            São Paulo
          </MenuItem>
        </TextField>
        <TextField
          id="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          label="Cidade"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Pesquisar
        </Button>
      </Form>
    </Box>
  );
};

export { SearchGeographicDist };
