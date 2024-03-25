import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { astronaut, planet, bgNotFound } from '@/assets/exports';
import { Button } from '@/components/ui/button';
import { NAVIGATION_LINK } from '@/enums/navigation.enum';

const NotFoundPage = () => {
  return (
    <body style={{ margin: 0, fontFamily: '"Dosis", sans-serif' }}>
      <Image
        layout="fill"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          zIndex: 0,
        }}
        src={bgNotFound}
        alt="alt"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: '50',
          marginTop: '2rem',
        }}
      >
        <h1
          style={{
            fontSize: '8rem',
            margin: 0,
            color: 'white',
            zIndex: '50',
          }}
        >
          404
        </h1>
        <h3 style={{ color: 'white', zIndex: '50' }}>
          LOST IN <span>SPACE</span> Booking Ticket? Hmm, looks like that page
          doesnt exist.
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Image
            className="astronaut"
            style={{ position: 'absolute', right: 0 }}
            src={astronaut}
            alt="astronaut"
            width={43}
          />
          <Image src={planet} alt="planet" width={400} />
          <Button
            style={{
              fontSize: '1.25rem',
              padding: '10px 30px',
              border: 'solid 1px white',
              borderRadius: '10px',
              background: 'transparent',
              color: 'white',
            }}
            variant="outline"
          >
            Go Home
          </Button>
          <Link href={NAVIGATION_LINK.HOME}></Link>
        </div>
      </div>
    </body>
  );
};

export default NotFoundPage;
