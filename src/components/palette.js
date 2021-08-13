import styled from "styled-components";
import React from "react";
import basetheme from "./theme";

const PaletteWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

const PaletteContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

const PaletteItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
    background-color: ${props => props.theme.colors[props.palette][props.backgroundColor]};
`;

const GetPalette = () => {
    const primaryColors = Object.keys(basetheme.colors.primary);
    const neutralColors = Object.keys(basetheme.colors.neutral);

    return (
        <PaletteWrapper>
        <h4>Primary colors:</h4>
        <PaletteContainer>
            {primaryColors.map(item => {
                return <PaletteItem key={item} palette="primary" backgroundColor={item}>{item}</PaletteItem>
            })}
        </PaletteContainer>
        <h4>Neutral colors:</h4>
        <PaletteContainer>
            {neutralColors.map(item => {
                return <PaletteItem key={item} palette="neutral" backgroundColor={item}>{item}</PaletteItem>
            })}
        </PaletteContainer>
        </PaletteWrapper>
    )
}

const Palette = () => {
    return (
        <>
        {GetPalette()}
        </>
    )
}

export { Palette };