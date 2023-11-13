import { Box, Card, Cell, FormField, Input } from '@wix/design-system'
import React from 'react'

export default function BarReview ({
  width,
  height,
  barBackground,
  text,
  display,
  justify,
  alignItems,
  textColor,
  font,
  toggleChecked,
  buttonColor,
  buttonTextColor,
  buttonText,
  inputTextColor,
  buttonBorder,
  marginRight,
  inputPlaceholder,
  buttonWidth,
  buttonHeight,
}) {
  return (
    <Cell rows={8} span={8}>
      <Card>
        <Card.Header title='Bar Review' />
        <Card.Divider />
        <Card.Content>
          <div
            style={{
              width: `${width}`,
              position: 'sticky',
              top: '0',
              height: `${height}`,
              background: `${barBackground}`,
              display: `${display}`,
              justifyContent: `${justify}`,
              alignItems: `${alignItems}`
            }}
          >
            <p style={{ color: `${textColor}`, fontFamily: `${font}` , marginRight: `${marginRight}` }}>
              {text}
            </p>

            {toggleChecked == 'button' ? (
              <button
                style={{
                  background: `${buttonColor}`,
                  color: `${buttonTextColor}`,
                  border: `${buttonBorder}`,
                  width: `${buttonWidth}`,
                  height: `${buttonHeight}`
                }}
              >
                {buttonText}
              </button>
            ) : toggleChecked == 'input' ? (
              <input style={{color: `${inputTextColor}`}} type='text' placeholder={inputPlaceholder} />
            ) : null}
          </div>
        </Card.Content>
      </Card>
    </Cell>
  )
}
