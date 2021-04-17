import { Box, Form } from './searchGeographicDist.style';
import { Typography, TextField, MenuItem, Button } from '@material-ui/core';
import { useFormik } from 'formik';

const SearchGeographicDist = () => {
  const formik = useFormik({
    initialValues: {
      specie: '',
      state: '',
      city: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <Box>
      <Typography variant="h6" component="h2" color="textSecondary">
        Pesquise por
      </Typography>
      <Form onSubmit={formik.handleSubmit}>
        <TextField label="Espécie" variant="outlined" />
        <TextField select label="Estado" variant="outlined">
          <MenuItem value="SP">São Paulo</MenuItem>
        </TextField>
        <TextField label="Cidade" variant="outlined" />
        <Button variant="contained" color="primary" type="submit">
          Pesquisar
        </Button>
      </Form>
    </Box>
  );
};

export { SearchGeographicDist };
