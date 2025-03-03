import { useActionState } from 'react';
import { isNotEmpty, hasMinLength } from '../util/validations';
function shareOpinion(prevFormState, formData) {
  const userName = formData.get('userName');
  const title = formData.get('title');
  const opinion = formData.get('body');

  let errors = {};

  if (!isNotEmpty(userName)) {
    errors['userName'] = 'Name field is empty';
  }

  if (!isNotEmpty(title)) {
    errors['title'] = 'Title field is empty';
  }
  if (!isNotEmpty(opinion) || !hasMinLength(opinion, 25)) {
    errors['opinion'] = 'Your opinion filed is empty or dont have at leat 25 characters';
  }
  if (Object.keys(errors).length > 0) {
    return {
      errors,
      enteredValues: {
        userName,
        title,
        opinion,
      },
    };
  }
  return { errors: null };
}
export function NewOpinion() {
  const [formState, formAction] = useActionState(shareOpinion, {
    errors: null,
  });
  console.log(formState);
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
          {formState.errors && <span className="errors">{formState.errors['opinion']}</span>}
        </p>

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
