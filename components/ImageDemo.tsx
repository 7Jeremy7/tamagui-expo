import { Image } from 'tamagui'
export function ImageDemo() {

  return (

    <Image
      source={{
        uri: 'https://placekitten.com/200/300',
        width: 200,
        height: 300,
      }}
      style={{
        borderRadius: 20,
      }}
    />

  )

}
