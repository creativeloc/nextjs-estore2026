import FrontendLayout from "@/components/layouts/FrontendLayout"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"

export default function SignupPage() {
  return (
    <FrontendLayout>
      <section className="flex min-h-[70vh] items-center justify-center py-16">
        <div className="max-w-md w-full">
          {/* header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Create Account
            </h2>

            <p className="mt-3 text-muted-foreground">
              Join us and start shopping for your favorite styles
            </p>
          </div>

          {/* form */}
          <form className="space-y-5 mt-8">
            <Input label="Full Name" placeholder="John Doe" type="text" />
            <Input
              label="eMail Address"
              placeholder="john@gmail.com"
              type="email"
            />
            <Input
              label="Password"
              placeholder="Create A Password"
              type="password"
            />

            <Button fullWidth={true}>Create Account</Button>
            <p className="text-center">OR</p>
            <Button
              leftIcon={<FcGoogle size={18} />}
              type="button"
              fullWidth={true}
              variant="outline"
            >
              Continue with Google
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/signin" className="font-bold uppercase text-accent">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </FrontendLayout>
  )
}
