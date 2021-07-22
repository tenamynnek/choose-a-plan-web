import {
  CircularProgress,
  Container,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import DoneIcon from '@material-ui/icons/Done'
import * as R from 'ramda'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getAllPlans,
  getPlansIsFetching,
  plansActionCreators
} from '@redux/plans'
import {
  getAllServices,
  getServicesIsFetching,
  servicesActionCreators
} from '@redux/services'

const ServiceRows = ({ plans, services }) => {
  const hasService = (planId, serviceId) => {
    return R.pipe(R.find(R.propEq('id', planId)), (obj) => {
      const planServices = R.propOr([], 'serviceId', obj) as any
      return planServices.includes(serviceId)
    })(plans)
  }

  return services.map((service) => {
    return (
      <TableRow key={`service-${service.id}`}>
        <TableCell>{service.name}</TableCell>
        {plans.map((plan) => {
          return (
            <TableCell align="right" key={`plan-service-${plan.id}`}>
              {hasService(plan.id, service.id) ? <DoneIcon /> : <ClearIcon />}
            </TableCell>
          )
        })}
      </TableRow>
    )
  })
}

const Home = ({ props }) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(plansActionCreators.fetchAllPlans())
    dispatch(servicesActionCreators.fetchAllServices())
  }, [])

  const plans = useSelector(getAllPlans)
  const services = useSelector(getAllServices)
  const isPlansFetching = useSelector(getPlansIsFetching)
  const isServicesFetching = useSelector(getServicesIsFetching)

  const [selectedValue, setSelectedValue] = React.useState()
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  if (!plans || !services || isPlansFetching || isServicesFetching) {
    return (
      <>
        <CircularProgress color="secondary" />
      </>
    )
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" align="center">
        Choose a Plan
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>&nbsp;</TableCell>
              {plans.map((plan) => {
                return (
                  <TableCell key={`plan-${plan.id}`} align="right">
                    {plan.name}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            <ServiceRows plans={plans} services={services} />

            <TableRow>
              <TableCell>&nbsp;</TableCell>
              {plans.map((plan) => {
                return (
                  <TableCell key={`plan-select-${plan.id}`} align="right">
                    <Radio
                      checked={selectedValue == plan.id}
                      value={plan.id}
                      onClick={handleChange}
                    />
                    <Typography variant="subtitle2" component="span">
                      HK{plan.price}
                    </Typography>{' '}
                    / Month
                  </TableCell>
                )
              })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

Home.getInitialProps = (context) => {
  const { store, query, req } = context
  // store.dispatch(plansActionCreators.fetchAllPlans())
  // store.dispatch(servicesActionCreators.fetchAllServices())

  return { props: {} }
}

export default Home
