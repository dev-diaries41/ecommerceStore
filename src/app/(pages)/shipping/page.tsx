import React, { Fragment } from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { LowImpactHero } from '../../_heros/LowImpact'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'

import classes from './index.module.scss'

export default async function Shipping() {

  return (
    <Fragment>
      <Gutter>
        <RenderParams className={classes.params} />
      </Gutter>
      <LowImpactHero
        type="lowImpact"
        media={null}
        richText={[
          {
            type: 'h1',
            children: [
              {
                text: 'Shipping Policy',
              },
            ],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: `Please note your goods will only be shipped Monday-Friday. Shipping timing begins when you receive the shipping confirmation email.

                Please note that once your order is confirmed, we are unable to alter the delivery address or method, or any details within your order, such as product, number of products, size, colour.
                
                A signature will be required on delivery, someone else can sign for the package.
                
                If you are not home to receive the delivery, DHL will leave you a contact card to pick up the package in person from your nearest depot or access point.
                
                We cannot deliver to certain addresses such as student/campus accommodation, hotels, restaurants, stores, or forwarding addresses.
                
                All our of shipments are sent within the European Union from our Netherlands warehouse, and therefore will not require any taxes or duties.`,
              },
             
            ],
          },
        ]}
      />
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Shipping',
  description: 'View shipping information',
  openGraph: mergeOpenGraph({
    title: 'Shipping',
    url: '/shipping',
  }),
}
