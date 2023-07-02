import { PrimaryButton } from "@/components/CommonComponents/Common-сomponents-style";
import {
  InfoPageWrapper,
  InfoPageImgWrapper,
  InfoPageTitle,
  InfoPageText,
} from "@/components/Info-page/Info-page-styles";
import Image from "next/image";

interface IProps {
  imgSrc: string
  imgAlt: string
  titleText: string
  mainText: string
  buttonText: string
  buttonLink: string
}

export default function InfoPageContent({  imgSrc,
imgAlt,
titleText,
mainText,
buttonText,
buttonLink }: IProps) {
  return (
    <InfoPageWrapper>
      <InfoPageImgWrapper>
        <Image
          src={imgSrc}
          width={320}
          height={320}
          alt={imgAlt}
        />
      </InfoPageImgWrapper>
    
      <InfoPageTitle variant="h1">{titleText}</InfoPageTitle>

      <InfoPageText>
      {mainText}
      </InfoPageText>

      <PrimaryButton type="button" size="large" variant="contained" href={buttonLink}>
        {buttonText}
      </PrimaryButton>
    </InfoPageWrapper>
  );
}
