import { Button } from 'react-native';

type ActionButtonProps = {
  label: string;
  onPress: () => void;
};

export function ActionButton({ label, onPress }: ActionButtonProps) {
  return <Button title={label} onPress={onPress} />;
}
