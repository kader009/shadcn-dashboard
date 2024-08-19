'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import login from '@/asset/image/undraw_Login_re_4vu2.png';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';


// Zod schema for form validation
const loginSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
  framework: z.string().min(1, { message: 'Framework is required' }),
});

type LoginForm = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Added reset to clear the form
    setValue,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    // Display a toast notification
    toast.success('Thank you! for login.');

    // Clear the form values
    reset();
  };

  return (
    <div className="flex justify-around sm:flex-col items-center gap-4 lg:flex-row">
      <Toaster /> {/* This is required to display the toast notifications */}
      <div>
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Login Your Self</CardTitle>
            <CardDescription>Go For Next Adventure.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Name here"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email here"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password here"
                    {...register('password')}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Choose Framework</Label>
                  <Select
                    onValueChange={(value) => setValue('framework', value)}
                  >
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="react">React.js</SelectItem>
                      <SelectItem value="rust">Rust</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.framework && (
                    <p className="text-red-500 text-sm">
                      {errors.framework.message}
                    </p>
                  )}
                </div>
              </div>
              <CardFooter className="flex justify-between mt-4">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
                <Button type="submit">Login</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
      <div>
        <Image src={login} alt="image" priority={true} />
      </div>
    </div>
  );
};

export default LoginPage;
