"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// local imports
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// scheme for form
const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  // controlling wether our store is open or close
  const storeModal = useStoreModal();

  // hook for form
  const form = useForm<z.infer<typeof formSchema>>({
    // validation using zod
    resolver: zodResolver(formSchema),
    // default values
    defaultValues: {
      name: "",
    },
  });

  // onsubmit function
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // create store
    console.log(values);
  };

  return (
    <Modal
      title='Create Store'
      description='Start by Creating Your First Store'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      {/* form  */}
      <div className=''>
        <div className='space-y-4 py-2 pb-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='E-Commerce'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage /> 
                  </FormItem>
                )}
              />
              <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
                <Button
                  variant='outline'
                  onClick={storeModal.onClose}
                >
                  Cancel
                </Button>
                <Button type='submit'>Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>

    // now we want to show this dialog throught the app
    // so we have to create a provider folder in the root
  );
};
