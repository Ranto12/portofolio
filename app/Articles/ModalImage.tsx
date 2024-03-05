"use client"
import { useDisclosure } from '@mantine/hooks';
import NextImage from 'next/image';
import { Modal, Button, Image as Nice } from '@mantine/core';
import { ReactAltera,Aws } from './asset';
import Image from 'next/image';

interface Props {
        image: any
}

function Modalemage({image}: Props) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal bg="blue" size="xl" opened={opened} onClose={close} withCloseButton={false} centered>
      <Nice
        alt='nice'
        radius="md"
        src={image}
        component={NextImage}
        />
      </Modal>
      <Image
        alt='nice'
        width={400}
        height={400}
        src={image}
        onClick={open}
        className='cursor-pointer rounded-md'
        />
    </>
  );
}

export default Modalemage;