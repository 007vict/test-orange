import React from 'react'
import { useForm } from 'react-hook-form'
import classes from "../../css/FormContact.module.css"

export default function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    pattern,
    reset
  } = useForm({mode: 'onSubmit'});

  const onSubmit = data => console.log(`Your data ${JSON.stringify(data)}`, reset())

  return (
    <div className={classes.formContact}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formIn}>
          <div>
            <input
              {...register('name', { required: 'Name is require field!' })}
              type="text"
              placeholder="Name"
            />
            <br />
            {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
          </div>

          <div>
            <input
              {...register('phone', {
                required: 'Phone is require field!',
                pattern: {
                  value: /\d/g,
                  message: 'Only number!',
                },
              })}
              type="text"
              placeholder="Phone"
            />
            <br />
            {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
          </div>

          <div>
            <input
              {...register('email', {
                required: 'Email is require field!',
              })}
              type="email"
              placeholder="Email"
            />
            <br />
            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
          </div>

          <div>
            <input
              {...register('company_name', { required: 'Company name is require field!' })}
              type="text"
              placeholder="Company name"
            />
            <br />
            {errors.company_name && (
              <span style={{ color: 'red' }}>{errors.company_name.message}</span>
            )}
          </div>

          <div className={classes.selectForm}>
            <select {...register('develop_select')}>
              <option value="mobile">Mobile Application Development</option>
              <option value="web">Web Application Development</option>
              <option value="SAAS">SAAS System Development</option>
            </select>
          </div>
        </div>

        <div>
          <input
            className={classes.textarea}
            {...register('desc', { required: true })}
            type="textarea"
            placeholder="Please, leave us a message"></input>
          <br />
          {errors.desc && <span style={{ color: 'red' }}>{errors.desc.message}</span>}
        </div>

        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}
