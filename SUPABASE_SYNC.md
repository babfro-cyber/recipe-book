# Supabase Sync Setup

## 1. Update the `plans` table

Run:

```sql
\i supabase/plans_sync.sql
```

Or paste the contents of `supabase/plans_sync.sql` into the Supabase SQL editor.

This keeps the sync model simple:

- one row per shared code
- `code` stored in lowercase
- `payload` stores the full planner state blob
- `updated_at` drives last-write-wins
- RLS only allows reads/writes when the request header `x-sync-code` matches the row code

## 2. Fill the public browser config

Edit `sync-config.js`:

```js
window.PANTRY_PILOT_SYNC_CONFIG = {
  supabaseUrl: "https://YOUR_PROJECT.supabase.co",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY",
};
```

These are public browser values, not service-role secrets.

## 3. Redeploy

Push the updated files and redeploy the static site.

## 4. Test cross-device sync

1. Open the app on your laptop.
2. Open Settings and enter a sync code such as `family-home`.
3. Add or remove a recipe and wait a couple of seconds.
4. Open the app on your iPhone with the same deployed URL.
5. Open Settings and enter the exact same sync code.
6. Confirm the current weekly plan appears on the phone.
7. Change the plan on the phone, then tap `Sync now`.
8. Return to the laptop tab and focus the page again, or wait up to one minute.
9. Confirm the latest change appears there too.

If sync fails, the app keeps using the local browser cache instead of clearing your data.
