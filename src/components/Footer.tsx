import React, { Fragment, useState } from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          {/* 测试sentry是否提供报错日志 */}
          <button
            type="button"
            onClick={() => {
              throw new Error('Sentry Frontend Error')
            }}
          >
            Throw error
          </button>
        </div>
        <p className="ml-5">footer</p>
      </div>
    </>
  )
}
