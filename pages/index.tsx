import { Title, Text } from '@mantine/core'

export default function Home () {
  return (
    <div className='flex items-center'>
      <Title className="text-white w-full font-normal p-3">
        Algorand Token Swapper
      </Title>
      <Text className='bg-gradient-to-r text-white basis-48 rounded-full h-fit py-2 text-center from-fuchsia-500 to-purple-800'>
        Connect to a wallet
      </Text>
    </div>
  )
}