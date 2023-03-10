import React from "react"

import { SignInForm } from "~/components/form/entity/sign-in"
import MenuSlider from "~/components/menu-slider"
import { signInSchema } from "~/lib/schema"
import { type NextPageWithLayout } from "~/types/page"

const DaisyForm: NextPageWithLayout = () => (
  <SignInForm
    initialValues={{ account: "", password: "" }}
    schema={signInSchema}
    onSubmit={(data) => {
      console.info("submit", data)
    }}
  />
)

DaisyForm.getLayout = (page) => <MenuSlider>{page}</MenuSlider>

export default DaisyForm
