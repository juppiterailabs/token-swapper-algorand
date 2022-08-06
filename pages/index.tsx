import { Title, Text, Modal, SimpleGrid, Button, Image } from "@mantine/core";
import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Select a wallet"
        centered
      >
        <div className="flex flex-col items-start gap-2">
          <Button
            className="w-full flex h-14 font-normal text-base"
            leftIcon={
              <Image
                src="algosigner_logo.png"
                width={35}
                alt="AlgoSigner Logo"
              />
            }
          >
            AlgoSigner
          </Button>
          <Button
            className="w-full flex h-14 font-normal text-base"
            leftIcon={
              <Image
                src="myalgowallet_logo.svg"
                width={35}
                alt="MyAlgoWallet Logo"
              />
            }
          >
            MyAlgoWallet
          </Button>
          <Button
            className="w-full flex h-14 font-normal text-base"
            leftIcon={
              <Image
                src="perawallet_logo.svg"
                width={35}
                alt="PeraWallet Logo"
              />
            }
          >
            Pera Wallet
          </Button>
        </div>
      </Modal>
      <div className="flex items-center px-5">
        <Title className="text-white w-full font-normal p-3">
          Algorand Token Swapper
        </Title>
        <Text
          className="bg-gradient-to-r cursor-pointer hover:brightness-125 text-white basis-48 rounded-full h-fit py-1.5 text-center from-pink-500 to-purple-800"
          onClick={() => setOpened(true)}
        >
          Connect to a wallet
        </Text>
      </div>
    </>
  );
}
