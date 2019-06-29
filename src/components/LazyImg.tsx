import React from "react"
import styled from "styled-components"

interface iLazyImgProps extends iOuterProps {
    thumb: string
    src: string
}

interface iOuterProps extends iFit{
    width: string
    height: string
}

interface iFit {
    fit: 'cover' | 'contain' | 'fill'
}

const Outer = styled.div<iOuterProps>`
    position: relative;
    margin: 0;
    padding: 0;
    width: ${props => props.width ? props.width : null};
    height: ${props => props.height ? props.height: null};
`

const FrontImg = styled.img<iFit>`
    display: block;
    position: absolute;
    top : 0;
    right: 0;
    bottom : 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    object-fit: ${props => props.fit ? props.fit : "cover"};
`

const BackImg = styled.img<iFit>`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    object-fit: ${props => props.fit ? props.fit : "cover"};
`

class LazyImg extends React.Component<iLazyImgProps> {
    frontImgRef = React.createRef<HTMLImageElement>()

    state = {
        opacity: 0
    }

    componentDidMount = () => {
        this.frontImgRef.current.onload = (e) => {
            console.log('loaded')
            this.setState({
                opacity: 1
            })
        }
    }

    render() {
        const style = {
            transition: 'opacity 2s linear 0.5s',
            opacity: this.state.opacity
        }
        return(
            <Outer width={this.props.width} height={this.props.height}>
                <BackImg src={this.props.thumb} fit={this.props.fit}/>
                <FrontImg src={this.props.src} fit={this.props.fit} ref={this.frontImgRef} style={style}/>
            </Outer>
        )
    }
}

export default LazyImg
