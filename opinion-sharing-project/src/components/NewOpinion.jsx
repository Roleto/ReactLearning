import { useActionState } from 'react';
import { isNotEmpty, hasMinLength, hasMaxLength } from '../util/validations';
import { use } from 'react';
import { OpinionsContext } from '../store/opinions-context';
import SubmitButton from './SubmitButton';

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);
  async function shareOpinion(prevFormState, formData) {
    const userName = formData.get('userName');
    const title = formData.get('title');
    const body = formData.get('body');

    let errors = {};

    if (!isNotEmpty(userName)) {
      errors['userName'] = 'Name field is empty';
    }

    if (!hasMinLength(title, 5)) {
      errors['title'] = 'Title must be at least 5 characters long';
    }
    if (!hasMinLength(body, 10) || !hasMaxLength(body, 300)) {
      errors['body'] = 'Opinion must be beetween 10 and 300 characters long';
    }
    if (Object.keys(errors).length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }
    await addOpinion({ userName, title, body });
    return { errors: null };
  }
  const [formState, formAction, pending] = useActionState(shareOpinion, {
    errors: null,
  });
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
            {formState.errors && <span className="errors">{formState.errors['userName']}</span>}
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
            {formState.errors && <span className="errors">{formState.errors['title']}</span>}
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            defaultValue={formState.enteredValues?.opinion}
            rows={5}
          ></textarea>
          {formState.errors && <span className="errors">{formState.errors['body']}</span>}
        </p>

        {/* <p className="actions">
          <button disabled={pending} type="submit">
            Submit
          </button>
        </p> */}
        <SubmitButton />
      </form>
    </div>
  );
}
