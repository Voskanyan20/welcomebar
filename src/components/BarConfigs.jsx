import {
  Button,
  Card,
  Cell,
  ColorInput,
  Dropdown,
  FormField,
  Input,
  Layout,
  RadioGroup
} from '@wix/design-system'
import React, { useState } from 'react'
import BarReview from './BarReview'
import instance from '../utills'

export default function BarConfigs () {
  const [width, setWidth] = useState('100%')
  const [height, setHeight] = useState('60px')
  const [barBackground, setBarBackground] = useState('#97FF00')
  const [barText, setBarText] = useState('Get 30% Off')
  const [barDisplay, setBarDisplay] = useState('flex')
  const [barJustify, setBarJustify] = useState('center')
  const [alignItems, setAlignItems] = useState('center')
  const [barTextColor, setBarTextColor] = useState('black')
  const [barFont, setBarFont] = useState('system-ui')
  const [toggleChecked, setToggleChecked] = useState('default')
  const [buttonBackground, setButtonBackground] = useState('black')
  const [buttonTextColor, setButtonTextColor] = useState('#fff')
  const [buttonText, setButtonText] = useState('Got It')
  const [buttonBorder, setButtonBorder] = useState('none')
  const [buttonWidth, setButtonWidth] = useState('95px')
  const [buttonHeight, setButtonHeight] = useState('30px')
  const [inputTextColor, setInputTextColor] = useState('black')
  const [textMargin, setTextMargin] = useState('25px')
  const [inputText, setInputText] = useState('Write...')
  const options = [
    { id: 0, value: 'system-ui' },
    { id: 1, value: 'monospace' },
    { id: 2, value: 'sans-serif' },
    { id: 3, value: 'serif' }
  ]

  const handleSubmit = async e => {
    e.preventDefault()

    if (toggleChecked == 'default') {
      await instance
        .post('/createBar', {
          width,
          height,
          barBackground,
          barText,
          barDisplay,
          barJustify,
          alignItems,
          barTextColor,
          barFont,
          toggleChecked,
          textMargin
        })
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    } else if (toggleChecked == 'button') {
      await instance
        .post('/createBar', {
          width,
          height,
          barBackground,
          text,
          barDisplay,
          barJustify,
          alignItems,
          barTextColor,
          barFont,
          toggleChecked,
          textMargin,
          buttonBackground,
          buttonTextColor,
          buttonText,
          buttonBorder,
          buttonWidth,
          buttonHeight
        })
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    } else if (toggleChecked == 'input') {
      await instance
        .post('/createBar', {
          width,
          height,
          barBackground,
          text,
          barDisplay,
          barJustify,
          alignItems,
          barTextColor,
          barFont,
          toggleChecked,
          textMargin,
          inputText,
          inputTextColor
        })
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
  }

  return (
    <Layout>
      <Cell span={4}>
        <Card>
          <Card.Header title='Bar Configs' />
          <Card.Divider />
          <Card.Content>
            <FormField label='width'>
              <Input
                type='text'
                name='width'
                value={width}
                onChange={e => setWidth(e.target.value)}
                placeholder='width'
                disabled
              />
            </FormField>
            <FormField label='heigth'>
              <Input
                type='text'
                name='height'
                value={height}
                onChange={e => setHeight(e.target.value)}
                placeholder='height'
                disabled
              />
            </FormField>
            <FormField label='Background color'>
              <ColorInput
                placeholder='Small'
                size='small'
                name='barBackground'
                value={barBackground}
                onChange={_color => setBarBackground(_color)}
              />
            </FormField>
            <FormField label='Text'>
              <Input
                name='barText'
                value={barText}
                type='text'
                onChange={e => setBarText(e.target.value)}
                placeholder='Text'
                maxLength={40}
              />
            </FormField>
            <FormField label='Text Color'>
              <ColorInput
                placeholder='Small'
                size='small'
                name='barTextColor'
                value={barTextColor}
                onChange={_color => setBarTextColor(_color)}
              />
            </FormField>
            <FormField label='Font'>
              <Dropdown
                name='barFont'
                size='small'
                defaultValue={barFont}
                placeholder='Select Font'
                onSelect={_select => setBarFont(_select.value)}
                options={options}
              />
            </FormField>
            <FormField label='Bar Type'>
              <RadioGroup
                value={toggleChecked}
                onChange={_select => setToggleChecked(_select)}
                display='horizontal'
              >
                <RadioGroup.Radio name='default' value={'default'}>
                  Default
                </RadioGroup.Radio>
                <RadioGroup.Radio name='button' value={'button'}>
                  Button
                </RadioGroup.Radio>
                <RadioGroup.Radio name='input' value={'input'}>
                  Input
                </RadioGroup.Radio>
              </RadioGroup>
            </FormField>
            {toggleChecked == 'button' ? (
              <>
                <FormField label='Button Color'>
                  <ColorInput
                    placeholder='Small'
                    size='small'
                    name='buttonBackground'
                    value={buttonBackground}
                    onChange={_color => setButtonBackground(_color)}
                  />
                </FormField>
                <FormField label='Button Text Color'>
                  <ColorInput
                    placeholder='Small'
                    size='small'
                    name='buttonTextColor'
                    value={buttonTextColor}
                    onChange={_color => setButtonTextColor(_color)}
                  />
                </FormField>
                <FormField label='Button Text'>
                  <Input
                    name='buttonText'
                    type='text'
                    value={buttonText}
                    onChange={e => setButtonText(e.target.value)}
                    placeholder='Text'
                    maxLength={10}
                  />
                </FormField>
              </>
            ) : toggleChecked == 'input' ? (
              <>
                <FormField label='Input Text Color'>
                  <ColorInput
                    placeholder='Small'
                    size='small'
                    name='inputTextColor'
                    value={inputTextColor}
                    onChange={_color => setInputTextColor(_color)}
                  />
                </FormField>
                <FormField label='Input Text'>
                  <Input
                    name='inputText'
                    type='text'
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    placeholder={setInputText}
                    maxLength={25}
                  />
                </FormField>
              </>
            ) : null}
            <Button onClick={(e) => handleSubmit(e)}>Save</Button>
          </Card.Content>
        </Card>
      </Cell>
      <BarReview
        width={width}
        height={height}
        barBackground={barBackground}
        text={barText}
        display={barDisplay}
        justify={barJustify}
        alignItems={alignItems}
        textColor={barTextColor}
        barFont={barFont}
        toggleChecked={toggleChecked}
        buttonColor={buttonBackground}
        buttonTextColor={buttonTextColor}
        buttonText={buttonText}
        inputTextColor={inputTextColor}
        buttonBorder={buttonBorder}
        marginRight={textMargin}
        inputPlaceholder={inputText}
        buttonWidth={buttonWidth}
        buttonHeight={buttonHeight}
      />
    </Layout>
  )
}
