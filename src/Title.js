export default function Title({mainTitle,subTitle}) { //use Title({mainTitle,subTitle})  in the following not need to use the props.mainTitle ,If use props.mainTitle is ok can use the Title(props)
  return (
    <div>
    <h1 style={{backgroundColor:'orange',textAlign:"center"}}>
        {mainTitle}  {/*If the function Title(props) here need to be input {props.mainTitle}*/}
        {subTitle}
    </h1>
    </div>
  )
}
