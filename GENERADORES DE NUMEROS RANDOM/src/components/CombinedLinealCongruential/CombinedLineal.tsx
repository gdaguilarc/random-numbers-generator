import React, { useCallback, useState } from "react";

import { History } from "history";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Grid from "@material-ui/core/Grid";

import InputComponent from "./Input";
import ResultComponent from "./Result";
import AboutComponent from "./About";
import MultiplicativeInputComponent from "./MultiplicativeInputs";
import HistoryList from "./History";

import useStyles from "./CombinedLinealStyles";

interface CombinedLinealScreenProps {
  history: History;
}

const CombinedLinealScreen: React.FC<CombinedLinealScreenProps> = ({
  history,
}) => {
  const classes = useStyles();

  const [error, setError] = useState("");
  const [kValue, setK] = useState<number>(1);
  const [iterations, setIterations] = useState<number>(20);
  const [rand, setRand] = useState<number>(3.21876);

  const initialComponents = [{ id: 1, error: "", seed: 0, a: 0, modulo: 0 }];
  let [componentList, setComponents] = useState<any>(initialComponents);

  const navBack = useCallback(() => {
    history.replace("/");
  }, [history]);

  const onKChange = (event: any, newValue: number | number[]) => {
    setK(newValue as number);
    let componentLst = [{ id: 1, error: "", seed: 0, a: 0, modulo: 0 }];
    for (let i = 2; i <= kValue; i++) {
      componentLst.push({ id: i, error: "", seed: 0, a: 0, modulo: 0 });
    }
    setComponents(componentLst);
  };

  const onIterationsChange = useCallback(
    ({ target }) => {
      setError("");
      setIterations(parseInt(target.value) || 0);
    },
    [setIterations]
  );

  const onMultChange = useCallback(
    ({ target }, id, opt) => {
      setError("");
      let list = Object.assign([], componentList);
      list.forEach(function (component: {
        id: number;
        error: string;
        seed: number;
        a: number;
        modulo: number;
      }) {
        if (component.id === id) {
          if (opt === 1) component.modulo = parseInt(target.value) || 0;
          else {
            if (opt === 2) component.a = parseInt(target.value) || 0;
            else component.seed = parseInt(target.value) || 0;
          }
        }
      });
      setComponents(list);
    },
    [componentList]
  );

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Typography variant="h4" className={classes.text}>
          <IconButton size="medium" onClick={navBack}>
            <ArrowBackIosIcon fontSize="inherit" />
          </IconButton>
          METODO CONGRUENCIAL LINEAL COMBINADO
        </Typography>
        <Box className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xl={3} lg={3} md={12} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <AboutComponent />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <InputComponent
                    k={kValue}
                    iterations={iterations}
                    setRand={setRand}
                    onKChange={onKChange}
                    onIterationsChange={onIterationsChange}
                    error={error}
                    generatorList={componentList}
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <Grid container spacing={3} id="mults">
                    {componentList.map(
                      (item: {
                        id: number;
                        error: string;
                        seed: number;
                        a: number;
                        modulo: number;
                      }) => (
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                          <MultiplicativeInputComponent
                            id={item.id}
                            seed={item.seed}
                            modulo={item.modulo}
                            error={item.error}
                            a={item.a}
                            onMultChange={onMultChange}
                          />
                        </Grid>
                      )
                    )}
                  </Grid>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <ResultComponent answer={rand} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <HistoryList
                    iterations={iterations}
                    genList={componentList}
                    k={kValue}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CombinedLinealScreen;
