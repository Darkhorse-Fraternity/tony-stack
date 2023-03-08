import React from "react"

import { SignInForm } from "~/components/form/entity/beat-board-form"
import MenuSlider from "~/components/menu-slider"
import { signInSchema } from "~/lib/schema"
import { type NextPageWithLayout } from "~/types/page"

const DaisyForm: NextPageWithLayout = () => (
  <SignInForm
    schema={signInSchema}
    // eslint-disable-next-line @typescript-eslint/require-await
    onSubmit={async (data) => {
      console.info("submit", data)
    }}
  />
)

DaisyForm.getLayout = (page) => <MenuSlider>{page}</MenuSlider>

export default DaisyForm
