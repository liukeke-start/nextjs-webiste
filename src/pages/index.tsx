

import React, { useState, useEffect } from 'react'
import NormalLayout from 'components/layout/normalLayout'
import { PageModel } from 'model/navModel'
import { useTranslation } from 'react-i18next'
import { postRequest } from 'services/getAxios'
export default Home

function Home() {
  let pageModel = new PageModel('HOME', 'WAVE', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

const collectionUrl = '/api/hello'
function Main() {
  let { i18n } = useTranslation()
  const { t } = useTranslation()

  useEffect(() => {
    getCollectionInfo()
  }, [])
  const getCollectionInfo = async () => {
    let params = {
      collection_id: 4,
    }
    // const res = await postRequest(collectionUrl, params)
    // console.log('res:',res)
    // if (res.status == 200 && res.data.error_code == 1) {
    //   const info = res.data.result
    //   console.log('info:',info)
    // }
  }
  return (
    <div className={'container'}>
      <div className={'main'}>{t('Content')}</div>
    </div>
  )
}
