import { DocumentData, Timestamp } from '@firebase/firestore';

/**
 * convert all fiels Firestore Timestamp to JS Date
 */
export const convertTimestampFieldsToJSDate = (
  docData: DocumentData,
  commonDateType: 'Millis' | 'Date',
) => {
  const results = { ...docData };
  const docDataKeys = Object.keys(docData ?? {});
  docDataKeys.forEach((each) => {
    if (docData[each] instanceof Timestamp) {
      results[each] =
        commonDateType === 'Date'
          ? (docData[each] as Timestamp).toDate()
          : (docData[each] as Timestamp).toMillis();
    }
  });
  return results;
};
