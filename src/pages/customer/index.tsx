import React, { useCallback, useEffect, useState } from 'react'
import { Table } from '../../components'
import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import Refactoring from '../../utils'

import { customersRequest, setLoadingCustomers } from '../../store/actions/customer'

import ModalCustomer from './modal'

export default function Customers() {
  const dispatch = useDispatch()

  const { customers, loadingCustomers } = useSelector((state: any) => state.customer)

  const [modal, setModal] = useState(false)
  const [page, setPage] = useState(0)
  const [content, setContent] = useState({})

  const phone = (value: string) => Refactoring.mask.phone(value)
  const docNumber = (value: string) => Refactoring.mask.docNumber(value)

  const getCustomers = useCallback(() => {
    dispatch(customersRequest({ offset: page }))
  }, [dispatch, page])

  useEffect(() => {
    getCustomers()
  }, [getCustomers])

  const customer = (data: any) => {
    setModal(true)

    if (!data) return

    setContent(data)
  }

  return (
    <Container>
      <ModalCustomer
        toggle={{ value: modal, set: setModal }}
        content={{ value: content, set: setContent }}
        page={{ value: page, set: setPage }}
      />
      <div className='customer-title'>Meus clientes</div>
      <Table
        loading={loadingCustomers}
        content={customers}
        paginate={{
          total: customers.totalPage,
          page: {
            value: page,
            set: setPage
          }
        }}
        notFound={{
          title: 'Nenhum cliente encontrado',
          message: 'Adicione um cliente para aparecer algum registro'
        }}
        options={[
          {
            column: {
              action: {
                icon: 'fa-solid fa-arrows-rotate',
                disabled: loadingCustomers,
                function: getCustomers,
                position: "left"
              }
            },
            row: { image: (data: any) => data.photo }
          },
          { column: 'Nome', row: { name: 'name', style: { fontWeight: 600 } } },
          { column: 'Telefone', row: { name: 'phone', mask: phone } },
          { column: 'CPF', row: { name: 'cpf', mask: docNumber } },
          { column: 'E-mail', row: 'email' },
          {
            column: { action: { icon: 'fa-solid fa-plus', function: customer } },
            row: { actions: [{ icon: 'fa-solid fa-pen-to-square', function: (data: any) => customer(data) }] }
          },
        ]}
      />
    </Container>
  )
}