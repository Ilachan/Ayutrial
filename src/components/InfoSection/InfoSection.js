import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Button1 } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './InfoSection.elements';

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  wideTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  start,
  img,
  alt,
  buttonLink
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc,wideTextDesc}>{description}</Subtitle>
                <Link to={buttonLink}>
                  <Button1 big fontBig primary={primary}>
                    {buttonLabel}
                  </Button1>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>

        </Container>
      </InfoSec>

      
    </>
  )
}


export default InfoSection;
